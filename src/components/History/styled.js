import styled from 'styled-components';

export const HistoryWrap = styled.div`
  padding: ${({ theme }) => theme.spaces.l} 0;
  width: 25%;
  display: flex;
`;

export const ColoredHr = styled.hr`
  height: 100%;
  width: 0;
  border: none;
  border-left: 2px solid ${({ theme }) => theme.colors.border};
`;

export const Aside = styled.aside`
  flex-grow: 1;
  height: 100%;
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
  height: 80%;
  word-break: break-all;
  overflow-y: scroll;
  color: ${({ theme }) => theme.colors.text};

  &::-webkit-scrollbar {
    width: 10px;
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
    background: #757474;
  }
`;

export const HistoryElement = styled.li`
  margin: 0 0 ${({ theme }) => theme.spaces.l} 0;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
