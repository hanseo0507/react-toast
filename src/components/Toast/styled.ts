import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { ToastAtomBackground } from '.';

export const ToastContainer = styled(motion.div)`
  position: relative;
  width: 340px;
  display: flex;
  align-items: center;
  background-color: white;
  gap: 18px;
  padding: 12px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ToastEmojiContainer = styled.div<{ background: ToastAtomBackground }>`
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

export const ToastProgressBarContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
`;

export const ToastProgressBar = styled.div<{ background: ToastAtomBackground }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 3px;
  background: ${({ background }) =>
    Array.isArray(background) ? `linear-gradient(${background.join(', ')})` : background};
`;

export const ToastProgressBarHider = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 3px;
  background-color: white;
`;
