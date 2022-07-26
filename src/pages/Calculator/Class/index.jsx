import React from 'react';

import { Display } from 'components/Display/Class';
import { Keyboard } from 'components/Keyboard/Class';
import { History } from 'components/History/Class';

import Calc from 'utils/calculator';
import { handleParenthesisMode, handlePressHelper } from 'utils/helpers';
import {
  getCalculationsHistory,
  setCalculationsHistory,
} from 'utils/localStorage';

import { CalculatorContainer, HomeContainer } from '../styled';
import { expressionReducer } from '../reducer';

export class ClassCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculator: new Calc(0),
      isParenthesis: false,
      expression: {
        input: 0,
        value: 0,
      },
    };
  }

  render() {
    const history = getCalculationsHistory();

    const changeHistory = (exp, res) => {
      const newHistory = [...history];
      newHistory.unshift({ expression: exp, result: res });
      setCalculationsHistory(newHistory);
    };

    const setIsParenthesis = (value) => {
      this.setState((prevState) => ({ ...prevState, isParenthesis: value }));
    };

    const setCalculator = (value) => {
      this.setState((prevState) => ({ ...prevState, calculator: value }));
    };

    const expressionDispatch = (action) => {
      const { expression } = this.state;
      const newExpression = expressionReducer(expression, action);
      this.setState((prevState) => ({
        ...prevState,
        expression: newExpression,
      }));
    };

    const handlePress = (event) => {
      const { expression, isParenthesis, calculator } = this.state;

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

    const { expression } = this.state;
    return (
      <HomeContainer>
        <CalculatorContainer>
          <Display expression={expression} />
          <Keyboard handlePress={handlePress} />
        </CalculatorContainer>
        <History />
      </HomeContainer>
    );
  }
}
