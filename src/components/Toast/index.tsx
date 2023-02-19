import React from 'react';

import { AnimationProps } from 'framer-motion';

import { ToastOptions, ToastPosition } from '../../core';

import * as S from './styled';

export type ToastEmojiBackground = string | [string, string] | [string, string, string];
export type ToastText = string | [string, string];

export interface ToastProps {
  emoji: string;
  emojiBackground: ToastEmojiBackground;
  text: ToastText;
  options?: Required<ToastOptions>;
}

const toastAnimations: Record<ToastPosition, AnimationProps> = {
  topLeft: {
    initial: { x: -390 },
    animate: { x: 0 },
    exit: { x: -390, height: 0, padding: 0 },
  },
  topRight: {
    initial: { x: 390 },
    animate: { x: 0 },
    exit: { x: 390, height: 0, padding: 0 },
  },
  topCenter: {
    initial: { y: -390 },
    animate: { y: 0 },
    exit: { y: -390, height: 0, padding: 0 },
  },
  bottomLeft: {
    initial: { x: -390 },
    animate: { x: 0 },
    exit: { x: -390, height: 0, padding: 0 },
  },
  bottomRight: {
    initial: { x: 390 },
    animate: { x: 0 },
    exit: { x: 390, height: 0, padding: 0 },
  },
  bottomCenter: {
    initial: { y: 390 },
    animate: { y: 0 },
    exit: { y: 390, height: 0, padding: 0 },
  },
};

export const Toast: React.FC<ToastProps> = ({ emoji, emojiBackground, text, options }) => {
  return (
    <S.ToastContainer
      {...(options?.position && {
        ...toastAnimations[options.position],
        transition: { type: 'spring', duration: 0.35 },
      })}
    >
      <S.ToastEmojiContainer background={emojiBackground}>{emoji}</S.ToastEmojiContainer>
      <S.ToastTextContainer>
        {Array.isArray(text) ? (
          <React.Fragment>
            <S.ToastSmallText>{text[0]}</S.ToastSmallText>
            <S.ToastText>{text[1]}</S.ToastText>
          </React.Fragment>
        ) : (
          <S.ToastText>{text}</S.ToastText>
        )}
      </S.ToastTextContainer>
    </S.ToastContainer>
  );
};
