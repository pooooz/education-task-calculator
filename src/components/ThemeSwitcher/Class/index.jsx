import React from 'react';

import { Select } from 'components/Select';

import { ThemePreferenceContext } from 'utils/context';

import { colorNames } from '../mocks';
import { ThemeOption, ThemeSwitcherHeading } from '../styled';

export class ThemeSwitcher extends React.Component {
  render() {
    const { currentTheme } = this.context;

    const selectTheme = (event) => {
      const { setCurrentTheme } = this.context;
      setCurrentTheme(event.target.value);
    };
    return (
      <>
        <ThemeSwitcherHeading>Switch theme</ThemeSwitcherHeading>
        <Select value={currentTheme} changeValue={selectTheme}>
          {colorNames.map((name) => (
            <ThemeOption value={name} key={name}>
              {name[0].toUpperCase() + name.slice(1, name.length)} theme
            </ThemeOption>
          ))}
        </Select>
      </>
    );
  }
}
ThemeSwitcher.contextType = ThemePreferenceContext;
