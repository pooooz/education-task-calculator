import styled from 'styled-components';

export const HistoryWrap = styled.div`
  padding: 25px 0;
  flex-grow: 5;
  display: flex;
`;

export const StyledHr = styled.hr`
  height: 100%;
  width: 0;
  border: none;
  border-left: 2px solid ${({ theme }) => theme.colors.border};
`;

export const StyledAside = styled.aside`
  flex-grow: 1;
  padding: 0 25px;
`;

export const HistoryHeading = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 32px;
`;

export const HistoryList = styled.ul`
  margin: 50px 0 0 0;
  overflow-y: scroll;
  height: 77vh;
  color: ${({ theme }) => theme.colors.text};

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    height: 29vh;
    background: ${({ theme }) => theme.colors.header};
    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #757474;
  }
`;

export const HistoryElement = styled.li`
  margin: 0 0 20px 0;
  font-size: 30px;
`;
