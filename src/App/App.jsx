import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { HistoryContext, ThemePreferenceContext } from 'utils/context';

import {
  getCalculationsHistory,
  getTheme,
  setCalculationsHistory,
  setTheme,
} from 'utils/localStorage';

import { AppRouter } from './AppRouter';

import { GlobalStyles, getColoredTheme } from '../theme';

export const App = () => {
  const [history, setHistory] = useState([]);

  const historyContextProviderValue = useMemo(
    () => ({ history, setHistory }),
    [history]
  );

  const [currentTheme, setCurrentTheme] = useState('light');
  const themeContextProviderValue = useMemo(
    () => ({ currentTheme, setCurrentTheme }),
    [currentTheme]
  );

  useEffect(() => {
    setHistory(getCalculationsHistory());
  }, []);

  useEffect(() => {
    setCalculationsHistory(history);
  }, [history]);

  useEffect(() => {
    setCurrentTheme(getTheme());
  }, []);

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  const theme = getColoredTheme(currentTheme);

  return (
    <ThemePreferenceContext.Provider value={themeContextProviderValue}>
      <HistoryContext.Provider value={historyContextProviderValue}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <AppRouter history={history} setHistory={setHistory} />
        </ThemeProvider>
      </HistoryContext.Provider>
    </ThemePreferenceContext.Provider>
  );
};
