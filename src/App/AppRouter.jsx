import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from 'containers/Header';
import { Calculator } from 'pages/Calculator';
import { Settings } from 'pages/Settings';
import { NotFound } from 'pages/NotFound';

export const AppRouter = ({ calculations }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route
          path="/home"
          element={
            <Calculator
              calculator={calculations.calculator}
              calculate={calculations.dispatchCommand}
            />
          }
        />
        <Route
          path="/settings"
          element={<Settings clearHistory={calculations.clearHistory} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
