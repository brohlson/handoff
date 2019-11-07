import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import history from './util/history';
import { Auth0Provider } from './lib/auth';
import App from './App';
import { urls } from './util/consts';

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};
const renderNode = (
  <Auth0Provider
    domain={process.env.AUTH0_DOMAIN}
    client_id={process.env.AUTH0_CLIENT_ID}
    redirect_uri={process.env.NODE_ENV === 'production' ? urls.prod : urls.dev}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>
);
const mountNode = document.getElementById('app');
ReactDOM.render(renderNode, mountNode);
