import React from 'react';
import close from './../../assets/close.svg';
import { ToastProps } from '@/interfaces';
import { TextColors } from '@/constants';
import {
  StyledToast,
  CloseIcon,
  VariantIcon,
  ToastLabel,
  FlexWrapper,
} from './styled';

let clientX: number;

function Toast({
  label,
  bgColor,
  icon,
  textColor,
  id,
  deleteToastById,
  animation,
  deleteTime,
}: ToastProps) {
  const isIconWhite = textColor === TextColors.white;

  const closeClickHandler = () => {
    if (deleteToastById) {
      deleteToastById(id);
    }
  };

  const mouseDownHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    clientX = e.clientX;
  };

  const mouseUpHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (Math.abs(clientX - e.clientX) >= 100 && deleteToastById) {
      deleteToastById(id);
    }
  };

  return (
    <div onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}>
      <StyledToast
        bg={bgColor}
        animationType={animation}
        deleteTime={deleteTime}
      >
        <FlexWrapper>
          <VariantIcon src={icon} isIconWhite={isIconWhite} />
          <ToastLabel textColor={textColor}>{label}</ToastLabel>
        </FlexWrapper>
        <CloseIcon
          src={close}
          isIconWhite={isIconWhite}
          onClick={closeClickHandler}
        />
      </StyledToast>
    </div>
  );
}

export default Toast;
