import React from 'react';
import PropTypes from 'prop-types';

import { ThemeSwitcher } from 'containers/ThemeSwitcher/Functional';
import { Heading, SettingsContainer, ClearButton } from '../styled';

const Settings = ({ setHistory }) => (
  <SettingsContainer>
    <Heading>Settings</Heading>
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
