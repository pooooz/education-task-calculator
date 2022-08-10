import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledAside,
  StyledHr,
  HistoryHeading,
  HistoryWrap,
  HistoryList,
  HistoryElement,
} from '../styled';

class History extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <HistoryWrap>
        <StyledHr />
        <StyledAside>
          <HistoryHeading>History</HistoryHeading>
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
