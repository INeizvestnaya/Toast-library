import styled, { keyframes, css } from 'styled-components';
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

const fromRight = keyframes`
  0% {
    transform: translate(100%);
  }
  100% {
    transform: translate(0);
  }
`;

const fromLeft = keyframes`
  0% {
    transform: translate(-100%);
  }
  100% {
    transform: translate(0);
  }
`;

const fromTop = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const fromBottom = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const animations = { fromTop, fromBottom, fromLeft, fromRight };

export const StyledToast = styled.div<ToastWrapperProps>`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: ${({ theme }) => theme.sizes.s}px;
    height: ${({ theme }) => theme.sizes.s / 5}px;
    border-radius: ${({ theme }) => theme.paddings.s}px;
    padding: ${({ theme }) => theme.paddings.s}px;
    margin: ${({ theme }) => theme.paddings.s}px;
  }
  @media (max-width: 1000px) {
    width: ${({ theme }) => theme.sizes.m}px;
    height: ${({ theme }) => theme.sizes.m / 5}px;
    border-radius: ${({ theme }) => theme.paddings.m}px;
    padding: ${({ theme }) => theme.paddings.m}px;
    margin: ${({ theme }) => theme.paddings.m}px;
  }
  @media (min-width: 1001px) {
    width: ${({ theme }) => theme.sizes.l}px;
    height: ${({ theme }) => theme.sizes.l / 5}px;
    border-radius: ${({ theme }) => theme.paddings.l}px;
    padding: ${({ theme }) => theme.paddings.l}px;
    margin: ${({ theme }) => theme.paddings.l}px;
  }
  background-color: ${({ bg }) => bg};
  ${({ animationType, deleteTime }) =>
    animationType &&
    deleteTime &&
    css`
      animation: ${animations[animationType]} 1s,
        ${animations[animationType]} 1s ${deleteTime}s;
    `}
  ${({ animationType, deleteTime }) =>
    animationType &&
    !deleteTime &&
    css`
      animation: ${animations[animationType]} 1s;
    `}
`;

export const ToastLabel = styled.div<ToastLabelProps>`
  color: ${({ textColor }) => textColor};
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
    padding-left: ${({ theme }) => theme.paddings.s}px;
  }
  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    padding-left: ${({ theme }) => theme.paddings.m}px;
  }
  @media (min-width: 1001px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    padding-left: ${({ theme }) => theme.paddings.l}px;
  }
  margin-top: auto;
  margin-bottom: auto;
`;

export const CloseIcon = styled.img<IconsProps>`
  @media (max-width: 500px) {
    width: ${({ theme }) => theme.iconSizes.s / 1.5}px;
    height: ${({ theme }) => theme.iconSizes.s / 1.5}px;
  }
  @media (max-width: 1000px) {
    width: ${({ theme }) => theme.iconSizes.m / 1.5}px;
    height: ${({ theme }) => theme.iconSizes.m / 1.5}px;
  }
  @media (min-width: 1001px) {
    width: ${({ theme }) => theme.iconSizes.l / 1.5}px;
    height: ${({ theme }) => theme.iconSizes.l / 1.5}px;
  }
  ${({ isIconWhite }) => isIconWhite && 'filter: invert(100%)'}
`;

export const VariantIcon = styled.img<IconsProps>`
  @media (max-width: 500px) {
    width: ${({ theme }) => theme.iconSizes.s}px;
    height: ${({ theme }) => theme.iconSizes.s}px;
  }
  @media (max-width: 1000px) {
    width: ${({ theme }) => theme.iconSizes.m}px;
    height: ${({ theme }) => theme.iconSizes.m}px;
  }
  @media (min-width: 1001px) {
    width: ${({ theme }) => theme.iconSizes.l}px;
    height: ${({ theme }) => theme.iconSizes.l}px;
  }
  margin-top: auto;
  margin-bottom: auto;
  ${({ isIconWhite }) => isIconWhite && 'filter: invert(100%)'}
`;

export const FlexWrapper = styled.div`
  display: flex;
`;
