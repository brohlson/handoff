import React, { Fragment } from 'react';

import Button from './Button';
import useAuth from '../hooks/useAuth';
import { urls } from '../util/consts';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth();
  const getLogoutUrl = () => {
    return process.env.NODE_ENV === 'production'
      ? urls.logoutProd
      : urls.logoutDev;
  };

  return (
    <Fragment>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect({})}>Log in</Button>
      ) : (
        <a href={getLogoutUrl()}>
          <Button>Log out</Button>
        </a>
      )}
    </Fragment>
  );
};

export default NavBar;
