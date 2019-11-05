import React, { Fragment, Suspense, lazy } from 'react';

import LoadingScreen from './components/LoadingScreen';

import Global from './style/global';
import Reset from './style/reset';

import useAuth from './hooks/useAuth';

const Routes = lazy(() => import('./Routes'));

export default function App() {
  const { loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Fragment>
      <Global />
      <Reset />
      <Suspense fallback={LoadingScreen}>
        <Routes />
      </Suspense>
    </Fragment>
  );
}
