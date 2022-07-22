import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'components/Navbar';

import { Heading } from 'components/Heading';
import { NavItem } from 'components/NavItem';
import { BaseHeader } from './styled';

export const Header = () => (
  <>
    <BaseHeader>
      <Heading>Calculation task</Heading>
      <Navbar>
        <NavItem to="/home">Home</NavItem>
        <NavItem to="/settings">Settings</NavItem>
      </Navbar>
    </BaseHeader>
    <main>
      <Outlet />
    </main>
  </>
);
