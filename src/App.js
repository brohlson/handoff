import React, { Fragment } from 'react';

import Routes from './Routes';
import LoadingScreen from './components/LoadingScreen';
import Global from './style/global';
import Reset from './style/reset';
import useAuth from './hooks/useAuth';

export default function App() {
  const { loading } = useAuth();

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
