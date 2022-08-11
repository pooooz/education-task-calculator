import React from 'react';
import PropTypes from 'prop-types';

import { ExpressionInput, ColoredHr, ValueInput } from '../styled';

const Display = ({ expression }) => (
  <>
    <ValueInput value={expression.value} readOnly />
    <ExpressionInput value={expression.input} readOnly />
    <ColoredHr />
  </>
);

Display.propTypes = {
  expression: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    input: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export { Display };
