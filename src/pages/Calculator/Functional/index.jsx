import React, { useContext, useReducer, useState } from 'react';

import Calc from 'utils/calculator';

import { Display } from 'containers/Display/Functional';
import { Keyboard } from 'containers/Keyboard/Functional';
import { History } from 'containers/History/Functional';
import { handleParenthesisMode, handlePressHelper } from 'utils/helpers';
import { HistoryContext } from 'utils/context';
import { expressionReducer } from '../reducer';
import { CalculatorContainer, HomeContainer } from '../styled';

export const Calculator = () => {
  const { history, setHistory } = useContext(HistoryContext);

  const [calculator, setCalculator] = useState(new Calc(0));
  const [isParenthesis, setIsParenthesis] = useState(false);

  const [expression, expressionDispatch] = useReducer(expressionReducer, {
    input: 0,
    value: 0,
  });

  const changeHistory = (exp, res) => {
    const newHistory = [...history];
    newHistory.unshift({ expression: exp, result: res });
    setHistory(newHistory);
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
      <History history={history} />
    </HomeContainer>
  );
};
