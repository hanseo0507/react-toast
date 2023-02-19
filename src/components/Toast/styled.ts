import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { ToastEmojiBackground } from '.';

export const ToastsContainer = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const ToastContainer = styled(motion.div)`
  width: 340px;

  display: flex;
  align-items: center;
  background-color: white;
  gap: 18px;
  padding: 12px;
  border-radius: 12px;
  overflow: hidden;
`;

export const ToastEmojiContainer = styled.div<{ background: ToastEmojiBackground }>`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background }) =>
    Array.isArray(background) ? `linear-gradient(${background.join(', ')})` : background};
  font-size: 24px;
  border-radius: 50%;
`;

export const ToastTextContainer = styled.div`
  letter-spacing: -0.42px;
`;

export const ToastSmallText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #51525b;
  margin: 0 0 2px 0;
`;

export const ToastText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  margin: 0;
`;
