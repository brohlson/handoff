import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/404'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Project = lazy(() => import('../pages/Project'));

const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
    private: false,
  },
  {
    component: Project,
    path: '/project/:projectId',
    exact: false,
    private: false,
  },
  {
    component: Dashboard,
    path: '/dashboard/settings',
    exact: false,
    private: true,
  },
  {
    component: Dashboard,
    path: '/dashboard/projects',
    exact: false,
    private: true,
  },
  {
    component: NotFound,
    path: '*',
    exact: false,
    private: false,
  },
];

export default routes;
