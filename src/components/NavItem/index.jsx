import React from 'react';

import { StyledNavLink } from './styled';

export const NavItem = ({ to, children }) => (
  <li>
    <StyledNavLink
      to={to}
      className={(isActive) => (isActive ? 'active' : null)}
    >
      {children}
    </StyledNavLink>
  </li>
);
