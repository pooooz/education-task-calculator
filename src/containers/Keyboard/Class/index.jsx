import React from 'react';
import PropTypes from 'prop-types';

import { buttonValues } from '../mocks';
import { Button, KeyboardGridContainer } from '../styled';

class Keyboard extends React.Component {
  render() {
    const { handlePress } = this.props;
    return (
      <KeyboardGridContainer onClick={handlePress}>
        {buttonValues.map((value) => (
          <Button key={value}>{value}</Button>
        ))}
      </KeyboardGridContainer>
    );
  }
}

Keyboard.propTypes = {
  handlePress: PropTypes.func.isRequired,
};

export { Keyboard };
