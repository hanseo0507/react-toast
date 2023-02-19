import { ToastProps } from '../components';

export enum ToastPosition {
  topLeft = 'topLeft',
  topRight = 'topRight',
  topCenter = 'topCenter',
  bottomLeft = 'bottomLeft',
  bottomRight = 'bottomRight',
  bottomCenter = 'bottomCenter',
}

export enum ToastType {
  success = 'success',
  warn = 'warn',
  warning = 'warning',
  error = 'error',
  danger = 'danger',
  info = 'info',
}

export const ToastPositionValues = Object.values(ToastPosition);

export type EnqueuedToast = { id: number; props: ToastProps; options: Required<ToastOptions> };

export interface ToastOptions {
  position?: ToastPosition;
  duration?: number;
}

export type ToastHandler = (props: ToastProps, options?: ToastOptions) => void;
export type TypeToastHandler = (props: Pick<ToastProps, 'text'>, options?: ToastOptions) => void;

export type ToastFunction = ToastHandler & { [type in ToastType]: TypeToastHandler };
export type ToastPositionQueueMap = Map<ToastPosition, EnqueuedToast[]>;
