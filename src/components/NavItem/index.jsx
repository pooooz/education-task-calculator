import React from 'react';
import { StyledNavLink } from './components';

export default function NavItem({ to, children }) {
  return (
    <li>
      <StyledNavLink
        to={to}
        className={(isActive) => (isActive ? 'active' : null)}
      >
        {children}
      </StyledNavLink>
    </li>
  );
}
