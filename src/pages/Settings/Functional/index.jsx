import React from 'react';

import { ThemeSwitcher } from 'components/ThemeSwitcher/Functional';
import { setCalculationsHistory } from 'utils/localStorage';
import { Heading, SettingsContainer, ClearButton } from '../styled';

export const Settings = () => {
  const clearHistory = () => {
    setCalculationsHistory([]);
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
