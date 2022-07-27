import styled from 'styled-components';

export const BaseHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 11vh;
  padding: 0 32px;
  background: ${({ theme }) => theme.colors.header};
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-weight: 400;
`;

export const Navbar = styled.ul`
  list-style-type: none;
  display: flex;
`;
