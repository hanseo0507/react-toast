import { ToastProps } from '../components';

export enum ToastPosition {
  topLeft = 'topLeft',
  topRight = 'topRight',
  topCenter = 'topCenter',
  bottomLeft = 'bottomLeft',
  bottomRight = 'bottomRight',
  bottomCenter = 'bottomCenter',
}

export enum ToastType {
  success = 'success',
  warn = 'warn',
  warning = 'warning',
  error = 'error',
  danger = 'danger',
  info = 'info',
}

export const ToastPositionValues = Object.values(ToastPosition);

export type EnqueuedToast = { id: number; props: ToastProps };
