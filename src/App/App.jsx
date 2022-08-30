import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemePreferenceContext } from 'utils/context';

import { getTheme, setTheme } from 'utils/localStorage';

import { AppRouter } from './AppRouter';

import { GlobalStyles, getColoredTheme } from '../theme';

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const themeContextProviderValue = useMemo(
    () => ({ currentTheme, setCurrentTheme }),
    [currentTheme]
  );

  useEffect(() => {
    setCurrentTheme(getTheme());
  }, []);

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  const theme = getColoredTheme(currentTheme);

  return (
    <ThemePreferenceContext.Provider value={themeContextProviderValue}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
};
