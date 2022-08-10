export default class Calculator {
  constructor(current = 0) {
    this.current = current;
  }

  execute(command) {
    this.current =
      Math.round(command.execute(this.current, command.value) * 1e3) / 1e3;
  }

  getCurrentValue() {
    return this.current;
  }
}
