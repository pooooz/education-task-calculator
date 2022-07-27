import React from 'react';

import { ThemeSwitcher } from 'containers/ThemeSwitcher';
import { SettingHeading, SettingsContainer, ClearButton } from './styled';

const Settings = ({ clearHistory }) => (
  <SettingsContainer>
    <SettingHeading>Settings</SettingHeading>
    <ThemeSwitcher />
    <ClearButton type="button" onClick={clearHistory}>
      Clear all history
    </ClearButton>
  </SettingsContainer>
);

export { Settings };
