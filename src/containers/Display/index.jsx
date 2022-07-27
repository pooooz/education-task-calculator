import React from 'react';
import { StyledInput, StyledHr } from './styled';

export const Display = ({ expression }) => {
  if (expression) {
    return (
      <>
        <StyledInput value={expression.value} readOnly />
        <StyledHr />
      </>
    );
  }
};
