import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemePreferenceContext } from 'utils/context';
import { AppRouter } from './AppRouter';
import { colors } from '../theme';
import { GlobalStyles } from './styled';

export const App = () => {
  const [history, setHistory] = useState([]);

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
        <AppRouter history={history} setHistory={setHistory} />
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
};
