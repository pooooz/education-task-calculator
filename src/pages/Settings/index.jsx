import React from 'react';
import PropTypes from 'prop-types';

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

Settings.propTypes = {
  clearHistory: PropTypes.func.isRequired,
};

export { Settings };
