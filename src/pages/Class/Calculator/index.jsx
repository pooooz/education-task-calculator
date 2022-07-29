import React from 'react';
import PropTypes from 'prop-types';

import Calc from 'utils/calculator';
import { commands } from 'actions';
import { Display } from 'containers/Class/Display';
import { Keyboard } from 'containers/Class/Keyboard';
import { History } from 'containers/Class/History';
import { CalculatorContainer, HomeContainer } from './styled';

class ClassCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
    };
  }

  handlePress = (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    const buttonValue = event.target.textContent;

    if (buttonValue === '=') {
      const { value } = this.state;
      const trimmedValue = value.trim();
      try {
        const newCalc = new Calc();
        newCalc.execute(commands.CalculateCommand(trimmedValue));
        const currentValue = Math.round(newCalc.getCurrentValue() * 1e5) / 1e5;
        this.dispatch({ type: 'equal', payload: currentValue.toString() });
        this.changeHistory(trimmedValue, currentValue);
      } catch (error) {
        this.dispatch({ type: 'equal', payload: 'Invalid input' });
      }
    } else {
      this.dispatch({ type: buttonValue, payload: buttonValue });
    }
  };

  changeHistory(exp, res) {
    const { history, setHistory } = this.props;

    const newHistory = [...history];
    newHistory.unshift({ expression: exp, result: res });
    setHistory(newHistory);
  }

  dispatch(action) {
    const { value } = this.state;

    switch (action.type) {
      case 'C': {
        this.setState({
          value: '0',
        });
        break;
      }
      case 'CE': {
        if (value.length > 1) {
          if (
            value[value.length - 1] === ' ' ||
            (Number.isNaN(Number(value[value.length - 1])) &&
              value[value.length - 1] !== '.')
          ) {
            this.setState((prevState) => ({
              value: prevState.value.slice(0, value.length - 3),
            }));
            break;
          }
          this.setState((prevState) => ({
            value: prevState.value.slice(0, value.length - 1),
          }));
          break;
        }
        this.setState({
          value: '0',
        });
        break;
      }
      case 'equal': {
        if (typeof action.payload === 'string') {
          this.setState({
            value: action.payload,
          });
          break;
        }
        this.setState({
          value: action.payload,
        });
        break;
      }
      default: {
        const expressionLastChar = value[value.length - 2];

        if (Number.isNaN(Number(action.payload)) && action.payload !== '.') {
          if (value === '0' && action.payload === '(') {
            this.setState({
              value: `${action.payload} `,
            });
            break;
          }
          if (expressionLastChar === '(' && action.payload === '-') {
            this.setState((prevState) => ({
              value: `${prevState.value}${action.payload}`,
            }));
            break;
          }
          if (
            value.toString().length > 2 &&
            action.payload !== '(' &&
            expressionLastChar !== '.' &&
            expressionLastChar !== '(' &&
            expressionLastChar !== ')' &&
            !(expressionLastChar === '-' && value[value.length - 4] === '(') &&
            Number.isNaN(Number(expressionLastChar))
          ) {
            this.setState((prevState) => ({
              value: `${
                prevState.value.slice(0, value.length - 2) + action.payload
              } `,
            }));
            break;
          }
          this.setState((prevState) => ({
            value:
              prevState.value[value.length - 1] === ' '
                ? `${prevState.value}${action.payload} `
                : `${prevState.value} ${action.payload} `,
          }));
          break;
        }
        this.setState((prevState) => ({
          value:
            prevState.value !== '0'
              ? `${prevState.value}${action.payload}`
              : `${action.payload}`,
        }));
        break;
      }
    }
  }

  render() {
    const { history } = this.props;
    const { value } = this.state;
    return (
      <HomeContainer>
        <CalculatorContainer>
          <Display expression={value} />
          <Keyboard handlePress={this.handlePress} />
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
