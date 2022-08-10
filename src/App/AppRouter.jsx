import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { paths } from 'constants/routes';
import { Header } from 'containers/Header';
import { Calculator } from 'pages/Calculator/Functional';
import { Settings } from 'pages/Settings/Functional';
import { NotFound } from 'pages/NotFound';
import { ClassCalculator } from 'pages/Calculator/Class';
import { ClassSettings } from 'pages/Settings/Class';

export const AppRouter = ({ history, setHistory }) => (
  <BrowserRouter basename="/education-task-calculator">
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path={paths.home}
          element={<Calculator history={history} setHistory={setHistory} />}
        />
        <Route
          path={paths.classHome}
          element={
            <ClassCalculator history={history} setHistory={setHistory} />
          }
        />
        <Route
          path={paths.settings}
          element={<Settings setHistory={setHistory} />}
        />
        <Route
          path={paths.classSettings}
          element={<ClassSettings setHistory={setHistory} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
