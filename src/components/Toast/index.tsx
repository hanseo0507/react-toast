import React from 'react';

import { AnimationProps } from 'framer-motion';

import { ToastOptions, ToastPosition } from '../../core';

import * as S from './styled';

export type ToastAtomBackground = string | [string, string] | [string, string, string];
export type ToastText = string | [string, string];

export interface ToastProps {
  emoji: string;
  text: ToastText;
  emojiBackground: ToastAtomBackground;
  progressBackground?: ToastAtomBackground;
  options: Required<ToastOptions>;
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

export const Toast: React.FC<ToastProps> = ({
  emoji,
  emojiBackground,
  text,
  progressBackground = emojiBackground,
  options,
}) => {
  return (
    <S.ToastContainer
      transition={{ type: 'spring', duration: 0.35 }}
      {...toastAnimations[options.position]}
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

      <S.ToastProgressBarContainer>
        <S.ToastProgressBar background={progressBackground} />
        <S.ToastProgressBarHider
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: (options ? options.duration : 0) / 1000 }}
        />
      </S.ToastProgressBarContainer>
    </S.ToastContainer>
  );
};
