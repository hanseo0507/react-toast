import React from 'react';

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
      {messages.map(({ id, props }) => (
        <Toast key={id} {...props} />
      ))}
    </S.ToastMessageContainer>
  );
};
