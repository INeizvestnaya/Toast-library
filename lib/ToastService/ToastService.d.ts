import { ToastVariants, TextColors } from '@/constants';
import { InitialToastProps, ToastProps } from '@/interfaces';
declare class ToastService {
    private toasts;
    constructor(toasts: ToastProps[]);
    private static toastService;
    addToast: (toast: ToastProps) => void;
    deleteToast: (toastId: string) => ToastProps[];
    getBgColor: (variant: keyof typeof ToastVariants, color?: string) => string;
    getIcon: (variant: keyof typeof ToastVariants) => string;
    getTextColor: (variant: string) => keyof typeof TextColors;
    generateToast: (toastOptions: InitialToastProps) => ToastProps[];
}
declare const toastService: ToastService;
export default toastService;
