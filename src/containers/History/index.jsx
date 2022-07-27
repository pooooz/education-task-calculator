import React from 'react';

import {
  StyledAside,
  StyledHr,
  HistoryHeading,
  HistoryWrap,
  HistoryList,
  HistoryElement,
} from './styled';

export const History = ({ history }) => (
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
