import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from 'containers/Header';
import { Home } from 'pages/Home';
import { Settings } from 'pages/Settings';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
