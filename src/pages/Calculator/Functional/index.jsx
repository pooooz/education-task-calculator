import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';

import Calc from 'utils/calculator';

import { Display } from 'containers/Display/Functional';
import { Keyboard } from 'containers/Keyboard/Functional';
import { History } from 'containers/History/Functional';
import { handleParenthesisMode, handlePressHelper } from 'utils/helpers';
import { expressionReducer } from '../reducer';
import { CalculatorContainer, HomeContainer } from '../styled';

const Calculator = ({ history, setHistory }) => {
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

    if (isParenthesis) {
      if (buttonValue === '+/-' || buttonValue === '=') return;
      handleParenthesisMode(
        buttonValue,
        expression,
        expressionDispatch,
        setIsParenthesis,
        changeHistory,
        setCalculator,
        calculator.getCurrentValue()
      );
      return;
    }
    handlePressHelper(
      buttonValue,
      expression,
      expressionDispatch,
      setIsParenthesis,
      changeHistory,
      setCalculator,
      calculator.getCurrentValue()
    );
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

Calculator.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      expression: PropTypes.string.isRequired,
      result: PropTypes.number.isRequired,
    })
  ).isRequired,
  setHistory: PropTypes.func.isRequired,
};

export { Calculator };
