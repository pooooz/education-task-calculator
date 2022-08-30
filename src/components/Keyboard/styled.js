import styled from 'styled-components';

const buttonSize = '100px';

export const KeyboardGridContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 5%;
  grid-row-gap: 3%;
  margin: ${({ theme }) => theme.spaces.l} 0 0 0;
`;

export const Button = styled.button`
  cursor: pointer;
  width: ${buttonSize};
  height: ${buttonSize};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 32px;
  background: ${({ theme, children }) =>
    children === '=' ? theme.colors.equal : theme.colors.button};
  font-size: ${({ theme }) => theme.fontSizes.l};

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    border: 3px solid ${({ theme }) => theme.colors.border};
  }
`;
