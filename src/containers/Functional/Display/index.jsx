import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, StyledHr } from './styled';

const Display = ({ expression }) => (
  <>
    <StyledInput value={expression.value} readOnly />
    <StyledHr />
  </>
);

Display.propTypes = {
  expression: PropTypes.shape({ value: PropTypes.string.isRequired })
    .isRequired,
};

export { Display };
