import toastService from '../ToastService';
import { InitialToastProps } from '@/interfaces';

const createToast = (props: InitialToastProps) => ({
  toasts: toastService.generateToast(props),
  deleteToast: toastService.deleteToast,
});

export default createToast;
