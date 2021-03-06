import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import LoadingScreen from './components/LoadingScreen';

import history from './util/history';
import routes from './util/routes';

export default function Routes() {
  function renderRoutes() {
    return routes.map((r, i) => {
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
    <Router history={history}>
      <Suspense fallback={<LoadingScreen />}>
        <Switch>{renderRoutes()}</Switch>
      </Suspense>
    </Router>
  );
}
