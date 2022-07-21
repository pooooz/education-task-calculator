import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../containers/Header';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
