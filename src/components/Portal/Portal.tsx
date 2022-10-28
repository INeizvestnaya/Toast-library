import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  let toastPortal = document.getElementById('toasts-container');
  if (!toastPortal) {
    toastPortal = document.createElement('div');
    toastPortal.id = 'toasts-container';
    document.body.prepend(toastPortal);
  }

  return createPortal(children, toastPortal);
};

export default Portal;
