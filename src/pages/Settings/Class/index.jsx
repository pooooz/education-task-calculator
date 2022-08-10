import React from 'react';
import PropTypes from 'prop-types';

import { ThemeSwitcher } from 'containers/ThemeSwitcher/Class';
import { SettingHeading, SettingsContainer, ClearButton } from '../styled';

class ClassSettings extends React.Component {
  render() {
    const { setHistory } = this.props;
    return (
      <SettingsContainer>
        <SettingHeading>Settings</SettingHeading>
        <ThemeSwitcher />
        <ClearButton type="button" onClick={() => setHistory([])}>
          Clear all history
        </ClearButton>
      </SettingsContainer>
    );
  }
}

ClassSettings.propTypes = {
  setHistory: PropTypes.func.isRequired,
};

export { ClassSettings };
