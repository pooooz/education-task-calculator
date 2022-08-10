import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from 'containers/Header';
import { Calculator } from 'pages/Calculator/Functional';
import { Settings } from 'pages/Settings/Functional';
import { NotFound } from 'pages/NotFound';
import { ClassCalculator } from 'pages/Calculator/Class';
import { ClassSettings } from 'pages/Settings/Class';

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
