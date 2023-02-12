import React, { ReactNode } from 'react';

interface StateType {
  isError: boolean;
}

interface PropsType {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError(): StateType {
    return { isError: true };
  }

  render() {
    const { children } = this.props;
    const { isError } = this.state;

    return isError ? <div>Error in showing toasts!</div> : children;
  }
}

export default ErrorBoundary;
