import React from 'react';

import { NotFoundContainer, NotFoundHeading, StyledNavLink } from './styled';

export const NotFound = () => (
  <NotFoundContainer>
    <NotFoundHeading>Page not found</NotFoundHeading>
    <StyledNavLink to="/home">Click on this link to go home!!!</StyledNavLink>
  </NotFoundContainer>
);
