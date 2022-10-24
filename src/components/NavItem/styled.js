import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const fullSize = '100%';

export const StyledNavLink = styled(NavLink)`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0.7')};
  text-decoration: none;
  margin: 0 0 0 ${({ theme }) => theme.spaces.xl};
  font-size: ${({ theme }) => theme.fontSizes.m};

  ${({ $isActive }) => {
    if ($isActive) {
      return css`
        &::after {
          position: absolute;
          content: '';
          height: 2px;
          margin: 0 auto;
          left: 0;
          right: 0;
          bottom: -5px;
          width: ${fullSize};
          background: ${({ theme }) => theme.colors.white};
        }
      `;
    }
  }}
`;
