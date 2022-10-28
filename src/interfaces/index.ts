import {
  ToastVariants,
  TextColors,
  PositionTypes,
  AnimationTypes,
} from '@/constants';

export type SpacesType = 0 | 10 | 20 | 30 | 40;

export interface InitialToastProps {
  variant?: keyof typeof ToastVariants;
  label: string;
  color?: string;
}

export interface ToastProps {
  id: string;
  label: string;
  bgColor: string;
  icon: string;
  textColor: keyof typeof TextColors;
  deleteToastById?: (toastId: string) => void;
  animation?: keyof typeof AnimationTypes;
  deleteTime?: number;
}

export interface ToastContainerProps {
  toasts: ToastProps[];
  position?: keyof typeof PositionTypes;
  spaces?: SpacesType;
  animation?: keyof typeof AnimationTypes;
  deleteToast: (id: string) => ToastProps[];
  deleteTime?: number;
}
