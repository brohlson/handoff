import Home from '../pages/Home';
import NotFound from '../pages/404';
import Settings from '../pages/Settings';
import { settingsSeo } from './seo';

const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
    private: false,
  },
  {
    component: Settings,
    path: '/settings',
    exact: false,
    private: true,
    meta: settingsSeo,
  },
  {
    component: NotFound,
    path: '*',
    exact: false,
    private: false,
  },
];

export default routes;
