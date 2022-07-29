import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import Calc from 'utils/calculator';
import { commands } from 'actions/index';
import { Display } from 'containers/Functional/Display';
import { Keyboard } from 'containers/Functional/Keyboard';
import { History } from 'containers/Functional/History';
import { CalculatorContainer, HomeContainer } from './styled';

const reducer = (expression, action) => {
  switch (action.type) {
    case 'C': {
      return {
        value: '0',
        result: '',
      };
    }
    case 'CE': {
      if (expression.value.length > 1) {
        if (
          expression.value[expression.value.length - 1] === ' ' ||
          (Number.isNaN(
            Number(expression.value[expression.value.length - 1])
          ) &&
            expression.value[expression.value.length - 1] !== '.')
        ) {
          return {
            value: expression.value.slice(0, expression.value.length - 3),
            result: '',
          };
        }
        return {
          value: expression.value.slice(0, expression.value.length - 1),
          result: '',
        };
      }
      return {
        value: '0',
        result: '',
      };
    }
    case 'equal': {
      if (typeof action.payload === 'string') {
        return {
          value: action.payload,
        };
      }
      return {
        value: action.payload,
      };
    }
    default: {
      const expressionLastChar = expression.value[expression.value.length - 2];

      if (Number.isNaN(Number(action.payload)) && action.payload !== '.') {
        if (expression.value === '0' && action.payload === '(') {
          return {
            value: `${action.payload} `,
          };
        }
        if (expressionLastChar === '(' && action.payload === '-') {
          return {
            value: `${expression.value}${action.payload}`,
          };
        }
        if (
          expression.value.toString().length > 2 &&
          action.payload !== '(' &&
          expressionLastChar !== '.' &&
          expressionLastChar !== '(' &&
          expressionLastChar !== ')' &&
          !(
            expressionLastChar === '-' &&
            expression.value[expression.value.length - 4] === '('
          ) &&
          Number.isNaN(Number(expressionLastChar))
        ) {
          return {
            value: `${
              expression.value.slice(0, expression.value.length - 2) +
              action.payload
            } `,
          };
        }
        return {
          value:
            expression.value[expression.value.length - 1] === ' '
              ? `${expression.value}${action.payload} `
              : `${expression.value} ${action.payload} `,
        };
      }
      return {
        value:
          expression.value !== '0'
            ? `${expression.value}${action.payload}`
            : `${action.payload}`,
      };
    }
  }
};

const Calculator = ({ history, setHistory }) => {
  const [expression, dispatch] = useReducer(reducer, {
    value: '0',
  });

  const changeHistory = (exp, res) => {
    const newHistory = [...history];
    newHistory.unshift({ expression: exp, result: res });
    setHistory(newHistory);
  };

  const handlePress = (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    const buttonValue = event.target.textContent;

    if (buttonValue === '=') {
      const { value } = expression;
      const trimmedValue = value.trim();
      try {
        const newCalc = new Calc();
        newCalc.execute(commands.CalculateCommand(trimmedValue));
        const currentValue = Math.round(newCalc.getCurrentValue() * 1e5) / 1e5;
        dispatch({ type: 'equal', payload: currentValue.toString() });
        changeHistory(trimmedValue, currentValue);
      } catch (error) {
        dispatch({ type: 'equal', payload: 'Invalid input' });
      }
    } else {
      dispatch({ type: buttonValue, payload: buttonValue });
    }
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
