import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';

import Heading from '../../components/Heading';
import { BaseHeader } from './components';
import NavItem from '../../components/NavItem';

export default function Header() {
  return (
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
}
