import React from 'react';
import PropTypes from 'prop-types';

import { ThemeSwitcher } from 'containers/Class/ThemeSwitcher';
import { SettingHeading, SettingsContainer, ClearButton } from './styled';

class ClassSettings extends React.Component {
  render() {
    const { clearHistory } = this.props;
    return (
      <SettingsContainer>
        <SettingHeading>Settings</SettingHeading>
        <ThemeSwitcher />
        <ClearButton type="button" onClick={clearHistory}>
          Clear all history
        </ClearButton>
      </SettingsContainer>
    );
  }
}

ClassSettings.propTypes = {
  clearHistory: PropTypes.func.isRequired,
};

export { ClassSettings };
