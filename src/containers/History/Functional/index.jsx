import React, { useState } from 'react';
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

const History = React.memo(({ history }) => {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibility = () => {
    setIsVisible(!isVisible);
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
});

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      expression: PropTypes.string,
      result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};

export { History };
