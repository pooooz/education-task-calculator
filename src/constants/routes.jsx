import React from 'react';

import { Calculator } from '../pages/Calculator/Functional';
import { Settings } from '../pages/Settings/Functional';

import { ClassCalculator } from '../pages/Calculator/Class';
import { ClassSettings } from '../pages/Settings/Class';

import { Layout } from '../components/Layout';

const home = '/home';
const settings = '/settings';

export const paths = {
  home,
  classHome: `${home}-class`,
  settings,
  classSettings: `${settings}-class`,
};

export const routes = [
  {
    id: 0,
    name: 'Home',
    path: paths.home,
    component: (
      <Layout>
        <Calculator />
      </Layout>
    ),
  },
  {
    id: 1,
    name: 'Class Home',
    path: paths.classHome,
    component: (
      <Layout>
        <ClassCalculator />
      </Layout>
    ),
  },
  {
    id: 2,
    name: 'Settings',
    path: paths.settings,
    component: (
      <Layout>
        <Settings />
      </Layout>
    ),
  },
  {
    id: 3,
    name: 'Class Settings',
    path: paths.classSettings,
    component: (
      <Layout>
        <ClassSettings />
      </Layout>
    ),
  },
];
