import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { privateRouteTypes } from '../util/types';
import { useAuth0 } from '../store/auth';

export default function PrivateRoute({ component: Component, path, ...rest }) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path },
        });
      }
    };
    fn();
  }, [isAuthenticated, loginWithRedirect, path]);

  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : null;

  return <Route path={path} render={render} {...rest} />;
}

PrivateRoute.propTypes = privateRouteTypes;
