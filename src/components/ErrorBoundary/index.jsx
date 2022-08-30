import React from 'react';

import { ErrorBoundaryContainer, ErrorHeading, ReloadButton } from './styled';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    console.error(error.message);
  }

  handleReload() {
    this.setState({ hasError: false });
  }

  render() {
    const { error, hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <ErrorBoundaryContainer>
          <ErrorHeading>An error has occurred!!!</ErrorHeading>
          {error.name}: {error.message}
          <ReloadButton onClick={this.handleReload}>Reload</ReloadButton>
        </ErrorBoundaryContainer>
      );
    }

    return children;
  }
}
