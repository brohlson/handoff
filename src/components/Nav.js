import React, { Fragment } from 'react';

import Button from './Button';
import { useAuth0 } from '../store/auth';
import { isBrowser } from '../util/helpers';

const NavBar = () => {
  if (!isBrowser()) return null;

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Fragment>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect({})}>Log in</Button>
      ) : (
        <Button onClick={() => logout({})}>Log out</Button>
      )}
    </Fragment>
  );
};

export default NavBar;
