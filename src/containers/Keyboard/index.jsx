import React from 'react';

import { Button } from 'components/Button';
import { buttonValues } from './mock';
import { KeyboardGridContainer } from './styled';

export const Keyboard = React.memo(({ handlePress }) => (
  <KeyboardGridContainer onClick={handlePress}>
    {buttonValues.map((value) => (
      <Button key={value}>{value}</Button>
    ))}
  </KeyboardGridContainer>
));
