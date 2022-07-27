import React, { useMemo, useReducer, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Calculator } from 'utils/calculator';
import { commands } from 'actions';
import { ThemePreferenceContext } from 'utils/context';
import { AppRouter } from './AppRouter';
import { colors } from '../theme';
import { GlobalStyles } from './styled';

const reducer = (state, action) => {
  switch (action.type) {
    case 'command': {
      const newCalc = state.calculator;
      newCalc.execute(commands.CalculateCommand(action.payload));
      return { calculator: newCalc };
    }
    case 'clear': {
      const newCalc = state.calculator;
      newCalc.clearHistory();
      return { calculator: newCalc };
    }
    default: {
      throw new Error('App.jsx error');
    }
  }
};

export const App = () => {
  const [calculator, dispatch] = useReducer(reducer, {
    calculator: new Calculator(),
  });

  const clearHistory = () => dispatch({ type: 'clear' });
  const dispatchCommand = (value) =>
    dispatch({ type: 'command', payload: value });

  const [currentTheme, setCurrentTheme] = useState('light');
  const themeContestProviderValue = useMemo(
    () => ({ currentTheme, setCurrentTheme }),
    [currentTheme]
  );
  const theme = { colors: colors[currentTheme] };

  return (
    <ThemePreferenceContext.Provider value={themeContestProviderValue}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter
          calculations={{ ...calculator, clearHistory, dispatchCommand }}
        />
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
};
