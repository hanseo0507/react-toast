import { ToastProps } from '../components';

export const TYPE_TOAST_EMOJI_PROPS: Record<
  'success' | 'warning' | 'error' | 'info',
  Pick<ToastProps, 'emoji' | 'emojiBackground'>
> = {
  success: { emoji: '✅', emojiBackground: '#6AD76A' },
  warning: { emoji: '🚧', emojiBackground: '#F3E45C' },
  error: { emoji: '🚨', emojiBackground: '#F3655C' },
  info: { emoji: 'ℹ️', emojiBackground: '#A0C9F0' },
};
