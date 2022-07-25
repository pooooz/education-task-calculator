import React from 'react';

import { Button } from 'components/Button';
import { buttonValues } from './mock';
import { KeyboardGridContainer } from './styled';

export const Keyboard = () => (
  <KeyboardGridContainer>
    {buttonValues.map((value) => (
      <Button key={value}>{value}</Button>
    ))}
  </KeyboardGridContainer>
);
