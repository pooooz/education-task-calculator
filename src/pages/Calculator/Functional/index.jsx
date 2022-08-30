import React, { useReducer, useState } from 'react';

import { Display } from 'components/Display/Functional';
import { Keyboard } from 'components/Keyboard/Functional';
import { History } from 'components/History/Functional';

import Calc from 'utils/calculator';
import { handleParenthesisMode, handlePressHelper } from 'utils/helpers';
import {
  getCalculationsHistory,
  setCalculationsHistory,
} from 'utils/localStorage';

import { expressionReducer } from '../reducer';
import { CalculatorContainer, HomeContainer } from '../styled';

export const Calculator = () => {
  const history = getCalculationsHistory();

  const [calculator, setCalculator] = useState(new Calc(0));
  const [isParenthesis, setIsParenthesis] = useState(false);

  const [expression, expressionDispatch] = useReducer(expressionReducer, {
    input: 0,
    value: 0,
  });

  const changeHistory = (exp, res) => {
    const newHistory = [...history];
    newHistory.unshift({ expression: exp, result: res });
    setCalculationsHistory(newHistory);
  };

  const handlePress = (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    const buttonValue = event.target.textContent;

    const helperArguments = [
      buttonValue,
      expression,
      expressionDispatch,
      setIsParenthesis,
      changeHistory,
      setCalculator,
      calculator.getCurrentValue(),
    ];

    if (isParenthesis) {
      if (buttonValue === '+/-' || buttonValue === '=') return;
      handleParenthesisMode(...helperArguments);
      return;
    }
    handlePressHelper(...helperArguments);
  };

  return (
    <HomeContainer>
      <CalculatorContainer>
        <Display expression={expression} />
        <Keyboard handlePress={handlePress} />
      </CalculatorContainer>
      <History />
    </HomeContainer>
  );
};
