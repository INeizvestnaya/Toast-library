import React, { ReactNode } from 'react';
interface StateType {
    isError: boolean;
}
interface PropsType {
    children: ReactNode;
}
declare class ErrorBoundary extends React.Component<PropsType, StateType> {
    constructor(props: PropsType);
    static getDerivedStateFromError(): StateType;
    render(): string | number | boolean | JSX.Element | React.ReactFragment | null | undefined;
}
export default ErrorBoundary;
