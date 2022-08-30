import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { routes } from 'constants/routes';

import { NotFound } from 'pages/NotFound';

export const AppRouter = () => (
  <BrowserRouter basename="/education-task-calculator">
    <Routes>
      <Route>
        <Route path="/" element={<Navigate to="/home" />} />
        {routes.map((route) => (
          <Route path={route.path} element={route.component} key={route.id} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
