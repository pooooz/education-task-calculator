import React from 'react';
import PropTypes from 'prop-types';

import { ThemeSwitcher } from 'containers/Functional/ThemeSwitcher';
import { SettingHeading, SettingsContainer, ClearButton } from './styled';

const Settings = ({ setHistory }) => (
  <SettingsContainer>
    <SettingHeading>Settings</SettingHeading>
    <ThemeSwitcher />
    <ClearButton type="button" onClick={() => setHistory([])}>
      Clear all history
    </ClearButton>
  </SettingsContainer>
);

Settings.propTypes = {
  setHistory: PropTypes.func.isRequired,
};

export { Settings };
