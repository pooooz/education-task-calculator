import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledAside,
  StyledHr,
  HistoryHeading,
  HistoryWrap,
  HistoryList,
  HistoryElement,
  HistoryButton,
} from '../styled';

class History extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
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
        <StyledHr />
        <StyledAside>
          <HistoryHeading>History</HistoryHeading>
          <HistoryButton onClick={changeVisibility}>
            {isVisible ? 'Hide' : 'Show'}
          </HistoryButton>
          {isVisible && (
            <HistoryList>
              {history.length ? (
                history.map((elem, index) => (
                  <HistoryElement key={elem.expression + index}>
                    {`${elem.expression} = ${elem.result} `}
                  </HistoryElement>
                ))
              ) : (
                <HistoryElement>History is empty</HistoryElement>
              )}
            </HistoryList>
          )}
        </StyledAside>
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
