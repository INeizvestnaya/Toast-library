import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { ToastContainerProps, ToastProps } from '@/interfaces';
import Toast from '../Toast';
import Portal from '../Portal';
import ErrorBoundary from '../ErrorBoundary';
import { ToastsWrapper } from './styled';
import { PositionTypes, Spaces } from '../../constants';

function ToastContainer({
  toasts,
  position = PositionTypes.bottomRight,
  spaces = Spaces[1],
  animation,
  deleteToast,
  deleteTime,
}: ToastContainerProps) {
  const [toastList, setToastList] = useState<ToastProps[]>(toasts);

  const deleteToastById = (toastId: string) => {
    setToastList(deleteToast(toastId));
  };

  useEffect(() => {
    setToastList(toasts);
  }, [toasts]);

  useEffect(() => {
    if (deleteTime !== undefined && toastList.length) {
      const intervalId = setInterval(() => {
        deleteToastById(toastList[0].id);
      }, deleteTime * 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [toasts, toastList, deleteTime]);

  return (
    <ErrorBoundary>
      <Portal>
        <ThemeProvider theme={theme}>
          <ToastsWrapper spaces={spaces} position={position}>
            {toastList.map((toast) => (
              <Toast
                key={toast.id}
                {...toast}
                deleteToastById={deleteToastById}
                animation={animation}
                deleteTime={deleteTime}
              />
            ))}
          </ToastsWrapper>
        </ThemeProvider>
      </Portal>
    </ErrorBoundary>
  );
}

export default ToastContainer;
