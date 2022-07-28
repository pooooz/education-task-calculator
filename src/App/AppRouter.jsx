import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from 'containers/Header';
import { Calculator } from 'pages/Functional/Calculator';
import { Settings } from 'pages/Functional/Settings';
import { NotFound } from 'pages/NotFound';
import { ClassCalculator } from 'pages/Class/Calculator';
import { ClassSettings } from 'pages/Class/Settings';

export const AppRouter = ({ calculations }) => (
  <BrowserRouter basename="/education-task-calculator">
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
          path="/homecl"
          element={
            <ClassCalculator
              calculator={calculations.calculator}
              calculate={calculations.dispatchCommand}
            />
          }
        />
        <Route
          path="/settings"
          element={<Settings clearHistory={calculations.clearHistory} />}
        />
        <Route
          path="/settingscl"
          element={<ClassSettings clearHistory={calculations.clearHistory} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
