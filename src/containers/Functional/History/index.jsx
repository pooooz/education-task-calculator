import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledAside,
  StyledHr,
  HistoryHeading,
  HistoryWrap,
  HistoryList,
  HistoryElement,
} from './styled';

const History = React.memo(({ history }) => (
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
));

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      expression: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};

export { History };
