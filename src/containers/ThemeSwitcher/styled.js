import styled from 'styled-components';

export const ThemeSwitcherHeading = styled.h3`
  margin: ${({ theme }) => theme.spaces.xl} 0 10px 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 400;
`;
