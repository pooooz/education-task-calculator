import React from 'react';
import PropTypes from 'prop-types';

import { StyledNavLink } from './styled';

const NavItem = ({ to, children }) => (
  <li>
    <StyledNavLink
      to={to}
      className={(isActive) => (isActive ? 'active' : null)}
    >
      {children}
    </StyledNavLink>
  </li>
);

NavItem.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export { NavItem };
