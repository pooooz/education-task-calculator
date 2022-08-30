import React from 'react';

import { ThemeSwitcher } from 'components/ThemeSwitcher/Class';

import { setCalculationsHistory } from 'utils/localStorage';

import { ClearButton, Heading, SettingsContainer } from '../styled';

export class ClassSettings extends React.Component {
  render() {
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
  }
}
