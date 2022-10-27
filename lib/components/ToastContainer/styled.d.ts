import { SpacesType } from '@/interfaces';
import { PositionTypes } from '@/constants';
interface ToastsWrapperProps {
    spaces: SpacesType;
    position: keyof typeof PositionTypes;
}
export declare const ToastsWrapper: import("styled-components").StyledComponent<"div", any, ToastsWrapperProps, never>;
export {};
