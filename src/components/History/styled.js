import styled from 'styled-components';

const fullSize = '100%';

const historyWidth = '25%';

const listHeight = '80%';

const thumbColor = '#757474';
const thumbWidth = '10px';

export const HistoryWrap = styled.div`
  padding: ${({ theme }) => theme.spaces.l} 0;
  width: ${historyWidth};
  display: flex;
`;

export const ColoredHr = styled.hr`
  height: ${fullSize};
  width: 0;
  border: none;
  border-left: 2px solid ${({ theme }) => theme.colors.border};
`;

export const Aside = styled.aside`
  flex-grow: 1;
  height: ${fullSize};
  padding: 0 ${({ theme }) => theme.spaces.l};
`;

export const Heading = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

export const VisibilityButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spaces.s};
  border: none;
  outline: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
`;

export const List = styled.ul`
  margin: ${({ theme }) => theme.spaces.xxl} 0 0 0;
  height: ${listHeight};
  word-break: break-all;
  overflow-y: scroll;
  color: ${({ theme }) => theme.colors.text};

  &::-webkit-scrollbar {
    width: ${thumbWidth};
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    height: 15px;
    background: ${({ theme }) => theme.colors.header};
    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${thumbColor};
  }
`;

export const HistoryElement = styled.li`
  margin: 0 0 ${({ theme }) => theme.spaces.l} 0;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
