import Calc from './calculator';
import { sendCommand } from './commands';

export const handleParenthesisMode = (
  buttonValue,
  expression,
  expressionDispatch,
  setIsParenthesis,
  changeHistory,
  setCalculator,
  currentValue
) => {
  const openedParenthesisCount = (expression.input.match(/\(/g) || []).length;
  const closedParenthesisCount = (expression.input.match(/\)/g) || []).length;
  if (/\d/.test(buttonValue)) {
    expressionDispatch({ type: 'parenthesisMode', payload: buttonValue });
  } else {
    switch (buttonValue) {
      case 'CE': {
        expressionDispatch({ type: 'clearEntry' });
        setIsParenthesis(false);
        break;
      }
      case 'C': {
        expressionDispatch({ type: 'clear' });
        setIsParenthesis(false);
        break;
      }
      case ')': {
        if (openedParenthesisCount === closedParenthesisCount + 1) {
          expressionDispatch({
            type: 'parenthesisMode',
            payload: buttonValue,
          });
          setIsParenthesis(false);
          const result = Math.round(eval(`${expression.input})`) * 1e3) / 1e3;
          if (
            expression.value === 0 ||
            expression.value === '0' ||
            expression.value.indexOf('=') >= 0
          ) {
            const newCalc = new Calc(result);
            expressionDispatch({
              type: 'equals',
              payload: result,
            });
            changeHistory(`${expression.input})`, result);
            setCalculator(newCalc);
            return;
          }

          const newCalc = new Calc(currentValue);
          newCalc.execute(
            sendCommand({ operator: expression.value.at(-1), value: result })
          );
          expressionDispatch({
            type: 'equals',
            payload: newCalc.getCurrentValue(),
          });
          changeHistory(
            `${expression.value}${expression.input})`,
            newCalc.getCurrentValue()
          );
          setCalculator(newCalc);
        } else {
          expressionDispatch({
            type: 'parenthesisMode',
            payload: buttonValue,
          });
        }
        break;
      }

      default: {
        expressionDispatch({ type: 'parenthesisMode', payload: buttonValue });
      }
    }
  }
};

export const handlePressHelper = (
  buttonValue,
  expression,
  expressionDispatch,
  setIsParenthesis,
  changeHistory,
  setCalculator,
  currentValue
) => {
  if (/\d/.test(buttonValue) || buttonValue === '.') {
    expressionDispatch({ type: 'number', payload: buttonValue });
  } else if (
    ((!expression.value || expression.value === '0') &&
      buttonValue !== '+/-' &&
      buttonValue !== 'C' &&
      buttonValue !== 'CE') ||
    (buttonValue === '=' && expression.value.indexOf('=') >= 0)
  ) {
    if (expression.value && buttonValue === '=') {
      if (expression.value.indexOf('=') >= 0) {
        changeHistory(
          expression.value.slice(0, expression.value.indexOf('=')),
          currentValue
        );
      } else {
        changeHistory(expression.input, expression.input);
      }
    } else if (buttonValue === '(') {
      expressionDispatch({ type: 'openParenthesis' });
      setIsParenthesis(true);
    } else {
      const newCalc = new Calc(0);
      newCalc.execute(
        sendCommand({ operator: '+', value: Number(expression.input) })
      );
      expressionDispatch({ type: 'firstValue', payload: buttonValue });
      setCalculator(newCalc);
    }
  } else {
    const historyExpression = `${expression.value}${expression.input}`;
    switch (buttonValue) {
      case 'CE': {
        expressionDispatch({ type: 'clearEntry' });
        break;
      }
      case 'C': {
        expressionDispatch({ type: 'clear' });
        break;
      }
      case '+/-': {
        expressionDispatch({ type: 'changeSign' });
        break;
      }
      case '(': {
        expressionDispatch({ type: 'openParenthesis' });
        setIsParenthesis(true);
        break;
      }
      case '=': {
        const newCalc = new Calc(currentValue);
        newCalc.execute(
          sendCommand({
            operator: expression.value.at(-1),
            value: Number(expression.input),
          })
        );
        expressionDispatch({
          type: 'equals',
          payload: newCalc.getCurrentValue(),
        });
        changeHistory(historyExpression, newCalc.getCurrentValue());
        setCalculator(newCalc);
        break;
      }
      default: {
        if (expression.value.indexOf('=') >= 0) {
          const newCalc = new Calc(0);
          newCalc.execute(
            sendCommand({ operator: '+', value: Number(expression.input) })
          );
          expressionDispatch({ type: 'firstValue', payload: buttonValue });
          setCalculator(newCalc);
          break;
        }

        if (expression.input === '0') {
          expressionDispatch({
            type: 'changeOperation',
            payload: buttonValue,
          });
          break;
        }

        const newCalc = new Calc(currentValue);
        newCalc.execute(
          sendCommand({
            operator: expression.value.at(-1),
            value: Number(expression.input),
          })
        );
        expressionDispatch({
          type: 'command',
          payload: newCalc.getCurrentValue() + buttonValue,
        });
        changeHistory(historyExpression, newCalc.getCurrentValue());
        setCalculator(newCalc);
        break;
      }
    }
  }
};
