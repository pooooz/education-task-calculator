class Command {
  constructor(execute, value) {
    this.execute = execute;
    this.value = value;
  }
}

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
const remain = (x, y) => x % y;

const addCommand = (value) => new Command(add, value);

const subCommand = (value) => new Command(sub, value);

const mulCommand = (value) => new Command(mul, value);

const divCommand = (value) => new Command(div, value);

const remainCommand = (value) => new Command(remain, value);

export const sendCommand = ({ operator, value }) => {
  switch (operator) {
    case '+': {
      return addCommand(value);
    }
    case '-': {
      return subCommand(value);
    }
    case '*': {
      return mulCommand(value);
    }
    case '/': {
      return divCommand(value);
    }
    case '%': {
      return remainCommand(value);
    }
    default: {
      throw new Error('The specified operation failed');
    }
  }
};
