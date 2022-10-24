import React from 'react';
import PropTypes from 'prop-types';

import { ColoredHr, ExpressionInput, ValueInput } from '../styled';

export class Display extends React.Component {
  render() {
    const { expression } = this.props;
    return (
      <>
        <ValueInput value={expression.value} readOnly />
        <ExpressionInput value={expression.input} readOnly />
        <ColoredHr />
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
