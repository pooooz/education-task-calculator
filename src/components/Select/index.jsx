import React from 'react';
import PropTypes from 'prop-types';

import { SelectWrap, StyledSelect } from './styled';

export const Select = ({ value, changeValue, children }) => (
  <SelectWrap>
    <StyledSelect value={value} onChange={changeValue}>
      {children}
    </StyledSelect>
  </SelectWrap>
);

Select.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};
