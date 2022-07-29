import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from 'containers/Header';
import { Calculator } from 'pages/Functional/Calculator';
import { Settings } from 'pages/Functional/Settings';
import { NotFound } from 'pages/NotFound';
import { ClassCalculator } from 'pages/Class/Calculator';
import { ClassSettings } from 'pages/Class/Settings';

export const AppRouter = ({ history, setHistory }) => (
  <BrowserRouter basename="/education-task-calculator">
    <Routes>
      <Route path="/" element={<Header />}>
        <Route
          path="/home"
          element={<Calculator history={history} setHistory={setHistory} />}
        />
        <Route
          path="/homecl"
          element={
            <ClassCalculator history={history} setHistory={setHistory} />
          }
        />
        <Route
          path="/settings"
          element={<Settings setHistory={setHistory} />}
        />
        <Route
          path="/settingscl"
          element={<ClassSettings setHistory={setHistory} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
