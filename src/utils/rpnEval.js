const Associativity = Object.freeze({ left: Symbol('L'), right: Symbol('R') });
const operations = new Map([
  [
    'exponentiation',
    { operator: '^', precedence: 4, associativity: Associativity.right },
  ],
  [
    'multiplication',
    { operator: '*', precedence: 3, associativity: Associativity.left },
  ],
  [
    'division',
    { operator: '/', precedence: 3, associativity: Associativity.left },
  ],
  [
    'addition',
    { operator: '+', precedence: 2, associativity: Associativity.left },
  ],
  [
    'subtraction',
    { operator: '-', precedence: 2, associativity: Associativity.left },
  ],
  ['bracket', { precedence: 0, isBracket: true }],
]);

const operators = Object.freeze({
  '^': operations.get('exponentiation'),
  '*': operations.get('multiplication'),
  '/': operations.get('division'),
  '+': operations.get('addition'),
  '-': operations.get('subtraction'),
  '(': operations.get('bracket'),
});

const isValid = (s) => {
  if (s.match(/[+\-*/]{2}/) || s.match(/\d\(/) || s.match(/\)\d/)) {
    throw new Error('Invalid input');
  }
  if (s.match(/\(\)/)) {
    throw new Error('Invalid parenthesis input');
  }
  const leftBrackets = s.match(/\(/g);
  const rightBrackets = s.match(/\)/g);
  if (leftBrackets || rightBrackets) {
    if (!(leftBrackets === null && rightBrackets !== null)) {
      if (s.match(/\(/g).length !== s.match(/\)/g).length) {
        throw new Error('Invalid parenthesis input');
      }
    } else {
      throw new Error('Invalid parenthesis input');
    }
  }
};

function convertToPostfix(infix) {
  isValid(infix.replace(/\s/g, ''));
  const tokens = infix.split(' ');
  const outputStack = [];
  const operatorStack = [];

  for (const token of tokens) {
    if (token in operators) {
      const op1 = operators[token];

      while (operatorStack.length) {
        const op2 = operatorStack[operatorStack.length - 1];

        if (
          (op1.associativity === Associativity.left &&
            op1.precedence <= op2.precedence) ||
          (op1.associativity === Associativity.right &&
            op1.precedence < op2.precedence)
        ) {
          operatorStack.pop();
          outputStack.push(op2.operator);
        } else {
          break;
        }
      }

      operatorStack.push(op1);
    } else if (token === ')') {
      while (!operatorStack[operatorStack.length - 1].isBracket) {
        outputStack.push(operatorStack.pop().operator);
      }
      operatorStack.pop();
    } else {
      outputStack.push(token);
    }
  }

  const res = outputStack.concat(
    operatorStack.reverse().map((x) => x.operator)
  );

  return res.join(' ');
}

function evaluatePostfix(postfix) {
  const tokens = postfix.split(' ');
  const stack = [];

  for (let token of tokens) {
    if (!['+', '-', '/', '*', '^'].includes(token)) {
      token = token.toLowerCase();
      stack.push(parseFloat(token));
    } else {
      const operands = stack.splice(-2, 2);
      stack.push(
        operands.reduce((prev, curr) => {
          switch (token) {
            case '+': {
              return prev + curr;
            }
            case '-': {
              return prev - curr;
            }
            case '*': {
              return prev * curr;
            }
            case '/': {
              return prev / curr;
            }
            case '^': {
              return prev ** curr;
            }
          }
        })
      );
    }
  }

  return stack.pop();
}

export { convertToPostfix, evaluatePostfix };
