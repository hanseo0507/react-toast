import React from 'react';

import * as S from './styled';

export type ToastEmojiBackground = string | [string, string] | [string, string, string];
export type ToastText = string | [string, string];

export interface ToastProps {
  emoji: string;
  emojiBackground: ToastEmojiBackground;
  text: ToastText;
}

export const Toast: React.FC<ToastProps> = ({ emoji, emojiBackground, text }) => {
  return (
    <S.ToastContainer>
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
