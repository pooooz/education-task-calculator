export const expressionReducer = (expression, action) => {
  switch (action.type) {
    case 'number': {
      if (expression.input === 0 || expression.input === '0') {
        return { ...expression, input: action.payload };
      }
      return { ...expression, input: expression.input + action.payload };
    }
    case 'firstValue': {
      return { input: '0', value: expression.input + action.payload };
    }
    case 'command': {
      return { input: '0', value: action.payload };
    }
    case 'equals': {
      if (
        expression.value !== '0' &&
        expression.value !== 0 &&
        expression.value.indexOf('=') < 0
      ) {
        return {
          input: action.payload,
          value: `${expression.value + expression.input}=${action.payload}`,
        };
      }
      return {
        input: action.payload,
        value: `${expression.input}=${action.payload}`,
      };
    }
    case 'clearEntry': {
      return {
        input: '0',
        value: expression.value,
      };
    }
    case 'clear': {
      return {
        input: 0,
        value: 0,
      };
    }
    case 'changeSign': {
      return {
        input:
          expression.input.toString()[0] === '-'
            ? expression.input.toString().slice(1)
            : `-${expression.input}`,
        value: expression.value,
      };
    }
    case 'changeOperation': {
      return {
        input: '0',
        value:
          expression.value.slice(0, expression.value.length - 1) +
          action.payload,
      };
    }
    case 'openParenthesis': {
      if (expression.input === 0 || expression.input === '0') {
        return {
          input: '(',
          value: expression.value,
        };
      }
      if (!Number.isNaN(expression.input)) {
        return {
          input: `(${expression.input}`,
          value: expression.value,
        };
      }
      return {
        input: `${expression.input}(`,
        value: expression.value,
      };
    }
    case 'parenthesisMode': {
      if (/\d/.test(action.payload) || action.payload === '.') {
        return {
          input: expression.input + action.payload,
          value: expression.value,
        };
      }
      if (action.payload === '(' && /\d/.test(expression.input.at(-1))) {
        return {
          input: expression.input,
          value: expression.value,
        };
      }
      if (
        !/\d/.test(action.payload) &&
        expression.input.at(-1) === '(' &&
        action.payload !== '('
      ) {
        return {
          input: expression.input,
          value: expression.value,
        };
      }
      if (
        action.payload !== '(' &&
        (/\d/.test(expression.input.at(-1)) ||
          expression.input.at(-1) === ')' ||
          expression.input.at(-1) === '(')
      ) {
        return {
          input: expression.input + action.payload,
          value: expression.value,
        };
      }
      if (action.payload === '(' && !/\d/.test(expression.input.at(-1))) {
        return {
          input: expression.input + action.payload,
          value: expression.value,
        };
      }
      return {
        input:
          expression.input.slice(0, expression.input.length - 1) +
          action.payload,
        value: expression.value,
      };
    }
    default:
      return expression;
  }
};
