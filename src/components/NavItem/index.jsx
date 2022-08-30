import React from 'react';
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';
import { StyledNavLink } from './styled';

export const NavItem = ({ to, children }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <StyledNavLink to={to} $isActive={pathname === to}>
        {children}
      </StyledNavLink>
    </li>
  );
};

NavItem.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
