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
          history.map((elem) => (
            <HistoryElement key={elem}>{elem}</HistoryElement>
          ))
        ) : (
          <HistoryElement>History is empty</HistoryElement>
        )}
      </HistoryList>
    </StyledAside>
  </HistoryWrap>
);
