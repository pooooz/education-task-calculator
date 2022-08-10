import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, StyledHr, ValueInput } from '../styled';

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
  expression: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    input: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export { Display };
