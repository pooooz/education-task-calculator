import styled from 'styled-components';

export const ThemeSwitcherHeading = styled.h3`
  margin: 30px 0 10px 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  font-weight: 400;
`;
