import React from 'react';
import { Header } from 'containers/Header';

export const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);
