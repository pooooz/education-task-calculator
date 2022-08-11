import React from 'react';
import PropTypes from 'prop-types';

import {
  Aside,
  ColoredHr,
  Heading,
  HistoryWrap,
  List,
  HistoryElement,
  VisibilityButton,
} from '../styled';

class History extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  render() {
    const { history } = this.props;
    const { isVisible } = this.state;

    const changeVisibility = () => {
      this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
    };

    return (
      <HistoryWrap>
        <ColoredHr />
        <Aside>
          <Heading>History</Heading>
          <VisibilityButton onClick={changeVisibility}>
            {isVisible ? 'Hide' : 'Show'}
          </VisibilityButton>
          {isVisible && (
            <List>
              {history.length ? (
                history.map((elem, index) => (
                  <HistoryElement key={elem.expression + index}>
                    {`${elem.expression} = ${elem.result} `}
                  </HistoryElement>
                ))
              ) : (
                <HistoryElement>History is empty</HistoryElement>
              )}
            </List>
          )}
        </Aside>
      </HistoryWrap>
    );
  }
}

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      expression: PropTypes.string,
      result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};

export { History };
