import { ReactNode } from 'react';
interface PortalProps {
    children: ReactNode;
}
declare const Portal: ({ children }: PortalProps) => import("react").ReactPortal;
export default Portal;
