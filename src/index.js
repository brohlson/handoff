import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import history from './util/history';
import { Auth0Provider } from './store/auth';
import { isBrowser } from './util/helpers';
import App from './App';

const onRedirectCallback = appState => {
  if (isBrowser()) {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
};
const withAuthNode = (
  <Auth0Provider
    domain={process.env.AUTH0_DOMAIN}
    client_id={process.env.AUTH0_CLIENT_ID}
    redirect_uri={isBrowser() && window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>
);
const renderNode = isBrowser() ? withAuthNode : <App />;
const mountNode = document.getElementById('app');
ReactDOM.render(renderNode, mountNode);
