import React, { Component, ReactNode } from 'react';
import styled from './errorBoundary.module.scss';

const TITLE_ERROR = 'Что-то пошло не так :(';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return <h1 className={styled.error}>{TITLE_ERROR}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
