import { CSSProperties } from 'react';

import styled from '@emotion/styled';

import { ToastPosition } from '../../core';

const positionStyles: Record<ToastPosition, CSSProperties> = {
  topLeft: {
    top: '16px',
    left: '16px',
  },
  topRight: {
    top: '16px',
    right: '16px',
  },
  topCenter: {
    top: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bottomLeft: {
    bottom: '16px',
    left: '16px',
  },
  bottomRight: {
    bottom: '16px',
    right: '16px',
  },
  bottomCenter: {
    bottom: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};

export const ToastMessageContainer = styled.div<{ position: ToastPosition }>(({ position }) => ({
  position: 'fixed',
  zIndex: 9999,
  ...positionStyles[position],
  transition: 'all 1s',

  '& > div:not(:last-child)': {
    marginBottom: '8px',
  },
}));
