import React, { useReducer, useEffect } from 'react';

import { Display } from 'containers/Display';
import { Keyboard } from 'containers/Keyboard';
import { History } from 'containers/History';
import { CalculatorContainer, HomeContainer } from './styled';

const reducer = (expression, action) => {
  switch (action.type) {
    case 'C': {
      return {
        value: '0',
      };
    }
    case 'CE': {
      if (expression.value.length > 1) {
        return {
          value: expression.value.slice(0, expression.value.length - 1),
        };
      }
      return {
        value: '0',
      };
    }
    case 'equal': {
      return {
        value: (Math.round(action.payload * 1e5) / 1e5).toString(),
      };
    }
    default: {
      if (Number.isNaN(Number(action.payload)) && action.payload !== '.') {
        if (
          expression.value[expression.value.length - 2] === '(' &&
          action.payload === '-'
        ) {
          return {
            value: `${expression.value}${action.payload}`,
          };
        }
        if (
          expression.value.toString().length > 2 &&
          action.payload !== '(' &&
          expression.value[expression.value.length - 2] !== '.' &&
          expression.value[expression.value.length - 2] !== '(' &&
          expression.value[expression.value.length - 2] !== ')' &&
          !(
            expression.value[expression.value.length - 2] === '-' &&
            expression.value[expression.value.length - 4] === '('
          ) &&
          Number.isNaN(Number(expression.value[expression.value.length - 2]))
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

export const Calculator = ({ calculator, calculate }) => {
  const [expression, dispatch] = useReducer(reducer, {
    value: '0',
  });

  useEffect(() => {
    dispatch({
      type: 'equal',
      payload: calculator.getCurrentValue().toString(),
    });
  }, [calculate, calculator]);

  const handlePress = (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    const buttonValue = event.target.textContent;

    if (buttonValue === '=') {
      calculate(expression.value.trim());
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
      <History history={calculator.history} />
    </HomeContainer>
  );
};
