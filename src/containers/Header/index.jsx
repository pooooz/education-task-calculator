import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavItem } from 'components/NavItem';
import { BaseHeader, Heading, Navbar } from './styled';

export const Header = () => (
  <>
    <BaseHeader>
      <Heading>Calculator App</Heading>
      <Navbar>
        <NavItem to="/home">Home</NavItem>
        <NavItem to="/homecl">Home Class</NavItem>
        <NavItem to="/settings">Settings</NavItem>
        <NavItem to="/settingscl">Settings Class</NavItem>
      </Navbar>
    </BaseHeader>
    <main>
      <Outlet />
    </main>
  </>
);
