import React from 'react';
import PropTypes from 'prop-types';

import Calc from 'utils/calculator';
import { Display } from 'containers/Class/Display';
import { Keyboard } from 'containers/Class/Keyboard';
import { History } from 'containers/Class/History';
import { handleParenthesisMode, handlePressHelper } from 'utils/helpers';
import { CalculatorContainer, HomeContainer } from './styled';
import { expressionReducer } from './reducer';

class ClassCalculator extends React.Component {
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
    const changeHistory = (exp, res) => {
      const { history, setHistory } = this.props;
      const newHistory = [...history];
      newHistory.unshift({ expression: exp, result: res });
      setHistory(newHistory);
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

    const { history } = this.props;
    const { expression } = this.state;
    return (
      <HomeContainer>
        <CalculatorContainer>
          <Display expression={expression} />
          <Keyboard handlePress={handlePress} />
        </CalculatorContainer>
        <History history={history} />
      </HomeContainer>
    );
  }
}

ClassCalculator.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      expression: PropTypes.string.isRequired,
      result: PropTypes.number.isRequired,
    })
  ).isRequired,
  setHistory: PropTypes.func.isRequired,
};

export { ClassCalculator };
