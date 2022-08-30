import React, { useState } from 'react';

import { getCalculationsHistory } from 'utils/localStorage';

import {
  Aside,
  ColoredHr,
  Heading,
  HistoryWrap,
  List,
  HistoryElement,
  VisibilityButton,
} from '../styled';

export const History = () => {
  const history = getCalculationsHistory();
  const [isVisible, setIsVisible] = useState(true);

  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <HistoryWrap>
      <ColoredHr />
      <Aside>
        <Heading>History</Heading>
        {Boolean(history.length) && (
          <VisibilityButton onClick={changeVisibility}>
            {isVisible ? 'Hide' : 'Show'}
          </VisibilityButton>
        )}
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
};
