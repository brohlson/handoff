import React, { Fragment } from 'react';

import LoadingScreen from './components/LoadingScreen';
import Routes from './Routes';
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
