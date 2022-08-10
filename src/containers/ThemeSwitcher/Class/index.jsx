import React from 'react';

import { ThemePreferenceContext } from 'utils/context';
import { Select } from 'components/Select';
import { colorNames } from '../mocks';
import { ThemeSwitcherHeading } from '../styled';

export class ThemeSwitcher extends React.Component {
  render() {
    const selectTheme = (event) => {
      const { setCurrentTheme } = this.context;
      setCurrentTheme(event.target.value);
    };

    const { currentTheme } = this.context;
    return (
      <>
        <ThemeSwitcherHeading>Switch theme</ThemeSwitcherHeading>
        <Select value={currentTheme} changeValue={selectTheme}>
          {colorNames.map((name) => (
            <option value={name} key={name}>
              {name[0].toUpperCase() + name.slice(1, name.length)} theme
            </option>
          ))}
        </Select>
      </>
    );
  }
}
ThemeSwitcher.contextType = ThemePreferenceContext;
