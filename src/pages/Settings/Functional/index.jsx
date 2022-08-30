import React, { useContext } from 'react';

import { ThemeSwitcher } from 'containers/ThemeSwitcher/Functional';
import { HistoryContext } from 'utils/context';
import { Heading, SettingsContainer, ClearButton } from '../styled';

export const Settings = () => {
  const { setHistory } = useContext(HistoryContext);

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <SettingsContainer>
      <Heading>Settings</Heading>
      <ThemeSwitcher />
      <ClearButton type="button" onClick={clearHistory}>
        Clear all history
      </ClearButton>
    </SettingsContainer>
  );
};
