import styled from 'styled-components';

export const BaseHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 13%;
  padding: 0 ${({ theme }) => theme.spaces.xl};
  background: ${({ theme }) => theme.colors.header};
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 400;
`;

export const Navbar = styled.ul`
  list-style-type: none;
  display: flex;
`;
