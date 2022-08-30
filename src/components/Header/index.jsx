import React from 'react';

import { NavItem } from 'components/NavItem';
import { routes } from 'constants/routes';
import { BaseHeader, Heading, Navbar } from './styled';

export const Header = React.memo(() => (
  <BaseHeader>
    <Heading>Calculator App</Heading>
    <Navbar>
      {routes.map(({ id, name, path }) => (
        <NavItem to={path} key={id}>
          {name}
        </NavItem>
      ))}
    </Navbar>
  </BaseHeader>
));
