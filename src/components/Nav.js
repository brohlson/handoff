import React, { Fragment } from 'react';

import Button from './Button';
import { useAuth0 } from '../store/auth';
import { isBrowser } from '../util/helpers';

const NavBar = () => {
  if (!isBrowser()) return null;

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const getLogoutUrl = () => {
    return process.env.NODE_ENV === 'production'
      ? 'https://handoff.auth0.com/v2/logout?returnTo=http%3A%2F%2Fhandoff-www.netlify.com'
      : 'https://handoff.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost:3000';
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
