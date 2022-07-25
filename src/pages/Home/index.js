import React from 'react';

import { Display } from 'containers/Display';
import { Keyboard } from 'containers/Keyboard';
import { History } from 'containers/History';
import { CalculatorContainer, HomeContainer } from './styled';

export const Home = () => (
  <HomeContainer>
    <CalculatorContainer>
      <Display />
      <Keyboard />
    </CalculatorContainer>
    <History history={['12 * 5', '3 * 4', '1 + 2']} />
  </HomeContainer>
);
