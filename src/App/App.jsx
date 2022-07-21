import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { AppRouter } from './AppRouter';
import { ThemePreferenceContext } from '../utils/context';
import { colors } from '../theme';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const themeContestProviderValue = useMemo(
    () => ({ currentTheme, setCurrentTheme }),
    [currentTheme]
  );
  const theme = { colors: colors[currentTheme] };
  return (
    <ThemePreferenceContext.Provider value={themeContestProviderValue}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}

export default App;
