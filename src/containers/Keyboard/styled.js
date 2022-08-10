import styled from 'styled-components';

export const KeyboardGridContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 6vw;
  grid-row-gap: 3vh;
  margin: 25px 0 0 0;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 8vw;
  height: 8vw;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 32px;
  background: ${({ theme, children }) =>
    children === '=' ? theme.colors.equal : theme.colors.button};
  font-size: 64px;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    border: 3px solid ${({ theme }) => theme.colors.border};
  }
`;
