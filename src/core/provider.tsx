import React, { createContext, useContext, useRef, useState } from 'react';

import { ToastMessagesContainer } from '../components';

import { TYPE_TOAST_EMOJI_PROPS } from './constant';
import {
  EnqueuedToast,
  ToastFunction,
  ToastHandler,
  ToastOptions,
  ToastPosition,
  ToastPositionQueueMap,
  ToastPositionValues,
  ToastType,
  TypeToastHandler,
} from './types';

export type ToastProviderProps = ToastOptions & { children?: React.ReactNode };

const ToastContext = createContext<ToastFunction | null>(null);

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = ToastPosition.topRight,
  duration = 3000,
}) => {
  const toastId = useRef<number>(0);
  const [queue, setQueue] = useState<ToastPositionQueueMap>(
    new Map(ToastPositionValues.map((v) => [v, []]))
  );

  const saveQueue = (
    position: ToastPosition,
    callback: (queueMap: ToastPositionQueueMap, queue: EnqueuedToast[]) => ToastPositionQueueMap
  ) => {
    setQueue((prev) => {
      const map = new Map(prev);
      return callback(map, map.get(position) as EnqueuedToast[]);
    });
  };

  const close = (id: number, position: ToastPosition) => {
    saveQueue(position, (queueMap, queue) => {
      const targetIndex = queue.findIndex((v) => v.id === id);
      queue.splice(targetIndex, 1);
      return queueMap;
    });
  };

  const closeDuration = (id: number, position: ToastPosition, duration: number) => {
    return setTimeout(() => close(id, position), duration);
  };

  const add: ToastHandler = (props, _options) => {
    const options = Object.assign({ position, duration }, _options) as Required<ToastOptions>;
    saveQueue(options.position, (queueMap, queue) => {
      queue.push({ id: ++toastId.current, props });
      closeDuration(toastId.current, options.position, options.duration);

      return queueMap;
    });
  };

  const toast: ToastFunction = Object.assign<ToastHandler, Record<ToastType, TypeToastHandler>>(
    add,
    {
      success: ({ text }, options) => add({ text, ...TYPE_TOAST_EMOJI_PROPS['success'] }, options),
      warn: ({ text }, options) => add({ text, ...TYPE_TOAST_EMOJI_PROPS['warning'] }, options),
      warning: ({ text }, options) => add({ text, ...TYPE_TOAST_EMOJI_PROPS['warning'] }, options),
      danger: ({ text }, options) => add({ text, ...TYPE_TOAST_EMOJI_PROPS['error'] }, options),
      error: ({ text }, options) => add({ text, ...TYPE_TOAST_EMOJI_PROPS['error'] }, options),
      info: ({ text }, options) => add({ text, ...TYPE_TOAST_EMOJI_PROPS['info'] }, options),
    }
  );

  return (
    <ToastContext.Provider value={toast}>
      <div>
        {ToastPositionValues.map((position) => (
          <ToastMessagesContainer
            key={position}
            position={position}
            messages={queue.get(position) || []}
          />
        ))}
      </div>

      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');

  return context;
};
