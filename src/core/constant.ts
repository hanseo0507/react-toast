import { ToastProps } from '../components';

export const TYPE_TOAST_EMOJI_PROPS: Record<
  'success' | 'warning' | 'error' | 'info',
  Pick<ToastProps, 'emoji' | 'emojiBackground'>
> = {
  success: { emoji: 'â', emojiBackground: '#6AD76A' },
  warning: { emoji: 'đ§', emojiBackground: '#F3E45C' },
  error: { emoji: 'đ¨', emojiBackground: '#F3655C' },
  info: { emoji: 'âšī¸', emojiBackground: '#A0C9F0' },
};
