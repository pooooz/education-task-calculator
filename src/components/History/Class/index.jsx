import React from 'react';

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

export class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  render() {
    const history = getCalculationsHistory();
    const { isVisible } = this.state;

    const changeVisibility = () => {
      this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
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
  }
}
