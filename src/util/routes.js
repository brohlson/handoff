import Home from '../pages/Home';
import NotFound from '../pages/404';
import Settings from '../pages/Settings';
import Widget from '../pages/Settings';
import { settingsSeo, widgetSeo } from './seo';

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
    component: Widget,
    path: '/widget/:user',
    exact: false,
    private: true,
    meta: widgetSeo,
  },
  {
    component: NotFound,
    path: '*',
    exact: false,
    private: false,
  },
];

export default routes;
