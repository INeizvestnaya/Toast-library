import { AnimationTypes, TextColors } from '@/constants';
interface ToastWrapperProps {
    bg: string;
    animationType?: keyof typeof AnimationTypes;
    deleteTime?: number;
}
interface ToastLabelProps {
    textColor: keyof typeof TextColors;
}
interface IconsProps {
    isIconWhite: boolean;
}
export declare const StyledToast: import("styled-components").StyledComponent<"div", any, ToastWrapperProps, never>;
export declare const ToastLabel: import("styled-components").StyledComponent<"div", any, ToastLabelProps, never>;
export declare const CloseIcon: import("styled-components").StyledComponent<"img", any, IconsProps, never>;
export declare const VariantIcon: import("styled-components").StyledComponent<"img", any, IconsProps, never>;
export declare const FlexWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
