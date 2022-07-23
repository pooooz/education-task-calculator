import React from 'react';

import { ThemeSwitcher } from 'containers/ThemeSwitcher';
import { SettingHeading, SettingsContainer } from './styled';

const Settings = () => (
  <SettingsContainer>
    <SettingHeading>Settings</SettingHeading>
    <ThemeSwitcher />
  </SettingsContainer>
);

export { Settings };
