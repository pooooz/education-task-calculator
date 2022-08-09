import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, StyledHr, ValueInput } from './styled';

class Display extends React.Component {
  render() {
    const { expression } = this.props;
    return (
      <>
        <ValueInput value={expression.value} readOnly />
        <StyledInput value={expression.input} readOnly />
        <StyledHr />
      </>
    );
  }
}

Display.propTypes = {
  expression: PropTypes.string.isRequired,
};

export { Display };
