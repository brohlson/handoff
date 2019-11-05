import Home from '../pages/Home';
import NotFound from '../pages/404';
import Settings from '../pages/Settings';

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
  },
  {
    component: NotFound,
    path: '*',
    exact: false,
    private: false,
  },
];

export default routes;
