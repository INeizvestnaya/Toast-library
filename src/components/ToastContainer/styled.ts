import styled from 'styled-components';
import { SpacesType } from '@/interfaces';
import { PositionTypes, Positions } from '../../constants';

interface ToastsWrapperProps {
  spaces: SpacesType;
  position: keyof typeof PositionTypes;
}

export const ToastsWrapper = styled.div<ToastsWrapperProps>`
  @media (max-width: 500px) {
    ${({ position, theme, spaces }) =>
    position === PositionTypes.topMiddle &&
      `transform: translate(-${theme.sizes.s / 2 + spaces}px);`}
  }
  @media (max-width: 1000px) {
    ${({ position, theme, spaces }) =>
    position === PositionTypes.topMiddle &&
      `transform: translate(-${theme.sizes.m / 2 + spaces}px);`}
  }
  @media (min-width: 1001px) {
    ${({ position, theme, spaces }) =>
    position === PositionTypes.topMiddle &&
      `transform: translate(-${theme.sizes.l / 2 + spaces}px);`}
  }
  z-index: 1000;
  position: fixed;
  ${({ position }) => Positions[position]}
  margin: ${({ spaces }) => `${spaces}px;`}
`;
