import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import StaticView from './components/StaticView';
import history from './util/history';
import { isBrowser } from './util/helpers';
import routes from './consts/routes';

export default function Routes() {
  const RouterComponent = isBrowser() ? BrowserRouter : Router;
  function renderRoutes() {
    return routes.map((r, i) => {
      if (r.private && !isBrowser()) {
        return (
          <Route path={r.path} exact={r.exact}>
            <StaticView {...r.meta} />
          </Route>
        );
      }
      let RouteComponent = r.private ? PrivateRoute : Route;
      return (
        <RouteComponent
          key={i}
          exact={r.exact}
          path={r.path}
          component={r.component}
        />
      );
    });
  }

  return (
    <RouterComponent history={history}>
      <Switch>{renderRoutes()}</Switch>
    </RouterComponent>
  );
}
