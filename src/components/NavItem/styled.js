import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
  text-decoration: none;
  margin: 0 0 0 ${({ theme }) => theme.spaces.xl};
  font-size: ${({ theme }) => theme.fontSizes.m};
  &.active {
    opacity: 1;
    position: relative;
  }

  &.active::after {
    position: absolute;
    content: '';
    height: 2px;
    bottom: -5px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
  }
`;
