import { v4 as uuid } from 'uuid';
import successIcon from './../assets/success.svg';
import infoIcon from './../assets/info.svg';
import warningIcon from './../assets/warning.svg';
import errorIcon from './../assets/error.svg';
import { ToastVariants, TextColors } from '@/constants';
import { InitialToastProps, ToastProps } from '@/interfaces';

class ToastService {
  private toasts: ToastProps[] = [];

  constructor(toasts: ToastProps[]) {
    if (ToastService.toastService) {
      return ToastService.toastService;
    }

    this.toasts = toasts;
    ToastService.toastService = this;
  }

  private static toastService: ToastService;

  addToast = (toast: ToastProps) => {
    if (this.toasts.length < 3) {
      this.toasts = [...this.toasts, toast];
    }
  };

  deleteToast = (toastId: string): ToastProps[] => {
    const newToasts = this.toasts.filter((toast) => toast.id !== toastId);
    this.toasts = newToasts;
    return this.toasts;
  };

  getBgColor = (variant: keyof typeof ToastVariants, color?: string) => {
    if (color) {
      return color;
    }

    switch (variant) {
      case ToastVariants.success:
        return '#37e29a';
      case ToastVariants.info:
        return '#9a40d3';
      case ToastVariants.warning:
        return '#f4e048';
      case ToastVariants.error:
        return '#e25837';
      default:
        return '#37e29a';
    }
  };

  getIcon = (variant: keyof typeof ToastVariants) => {
    switch (variant) {
      case ToastVariants.success:
        return successIcon;
      case ToastVariants.info:
        return infoIcon;
      case ToastVariants.warning:
        return warningIcon;
      case ToastVariants.error:
        return errorIcon;
      default:
        return successIcon;
    }
  };

  getTextColor = (variant: string): keyof typeof TextColors => {
    if (variant === ToastVariants.warning) {
      return TextColors.black;
    }

    return TextColors.white;
  };

  generateToast = (toastOptions: InitialToastProps) => {
    const { label, color, variant = ToastVariants.success } = toastOptions;

    const newToast = {
      id: uuid(),
      label,
      bgColor: this.getBgColor(variant, color),
      icon: this.getIcon(variant),
      textColor: this.getTextColor(variant),
    };

    this.addToast(newToast);

    return this.toasts;
  };
}

const toastService = new ToastService([]);

export default toastService;
