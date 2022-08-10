import React, { useEffect, useMemo, useState } from 'react';
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

  useEffect(() => {
    const localStorageHistory =
      JSON.parse(localStorage.getItem('history')) ?? [];
    setHistory(localStorageHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'history',
      JSON.stringify(history, (key, value) => {
        if (Number.isNaN(value.result)) {
          return { ...value, result: 'NaN' };
        }
        switch (value.result) {
          case Infinity: {
            return { ...value, result: 'Infinity' };
          }
          default: {
            return value;
          }
        }
      })
    );
  }, [history]);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme') ?? 'light';
    setCurrentTheme(localStorageTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

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
