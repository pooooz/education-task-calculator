import styled from 'styled-components';

export const StyledButton = styled.button`
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
