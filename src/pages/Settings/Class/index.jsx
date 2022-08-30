import React from 'react';

import { ThemeSwitcher } from 'containers/ThemeSwitcher/Class';
import { HistoryContext } from 'utils/context';
import { Heading, SettingsContainer, ClearButton } from '../styled';

export class ClassSettings extends React.Component {
  render() {
    const clearHistory = () => {
      const { setHistory } = this.context;
      setHistory([]);
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

ClassSettings.contextType = HistoryContext;
