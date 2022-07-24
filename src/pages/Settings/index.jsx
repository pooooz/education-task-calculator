import React from 'react';

import { ThemeSwitcher } from 'containers/ThemeSwitcher';
import { SettingHeading, SettingsContainer, ClearButton } from './styled';

const Settings = () => (
  <SettingsContainer>
    <SettingHeading>Settings</SettingHeading>
    <ThemeSwitcher />
    <ClearButton type="button">Clear all history</ClearButton>
  </SettingsContainer>
);

export { Settings };
