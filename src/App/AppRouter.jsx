import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from 'containers/Header';
import { Settings } from 'pages/Settings';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
