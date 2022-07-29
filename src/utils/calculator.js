class Command {
  constructor(execute, value) {
    this.execute = execute;
    this.value = value;
  }
}

function createCommand(func) {
  return function doSomething(value) {
    return new Command(func, value);
  };
}

class Calculator {
  constructor() {
    this.current = 0;
  }

  execute(command) {
    this.current = command.execute(command.value);
  }

  getCurrentValue() {
    return this.current;
  }
}

export default Calculator;
export { createCommand };
