import React, { Fragment } from 'react';

import Routes from './Routes';
import LoadingScreen from './components/LoadingScreen';
import Global from './style/global';
import Reset from './style/reset';
import { useAuth0 } from './store/auth';
import { isBrowser } from './util/helpers';

export default function App() {
  let loading = false;

  if (isBrowser()) {
    loading = useAuth0().loading;
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Fragment>
      <Global />
      <Reset />
      <Routes />
    </Fragment>
  );
}
