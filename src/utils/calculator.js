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
    this.history = [];
  }

  execute(command) {
    const result = command.execute(command.value);
    this.current = result;
    this.history.unshift({
      expression: command.value,
      result: Math.round(result * 1e5) / 1e5,
    });
  }

  getCurrentValue() {
    return this.current;
  }

  clearHistory() {
    this.history = [];
    this.current = 0;
  }
}

export { Calculator, createCommand };
