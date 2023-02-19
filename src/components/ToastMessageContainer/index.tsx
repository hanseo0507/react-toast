import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { EnqueuedToast, ToastPosition } from '../../core';
import { Toast } from '../Toast';

import * as S from './styled';

export interface ToastMessagesContainerProps {
  position: ToastPosition;
  messages: EnqueuedToast[];
}

export const ToastMessagesContainer: React.FC<ToastMessagesContainerProps> = ({
  position,
  messages,
}) => {
  return (
    <S.ToastMessageContainer position={position}>
      <AnimatePresence>
        {messages.map(({ id, props, options }) => (
          <Toast key={id} options={options} {...props} />
        ))}
      </AnimatePresence>
    </S.ToastMessageContainer>
  );
};
