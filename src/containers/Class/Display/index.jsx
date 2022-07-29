import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, StyledHr } from './styled';

class Display extends React.Component {
  render() {
    const { expression } = this.props;
    return (
      <>
        <StyledInput value={expression} readOnly />
        <StyledHr />
      </>
    );
  }
}

Display.propTypes = {
  expression: PropTypes.string.isRequired,
};

export { Display };
