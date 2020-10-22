import 'bootstrap/dist/css/bootstrap.min.css';
import 'piral/polyfills';
import { renderInstance, getUserLocale, setupLocalizer } from 'piral';
import { createInstance, LoadingIndicatorProps, Piral, SetComponent, SetRoute } from 'piral-core';
import { createAuthApi } from 'piral-auth';
import { createSearchApi } from 'piral-search';
import { setupFooter, setupMenu } from './parts';
import { layout, errors } from './layout';
import { Redirect } from 'react-router';
import * as React from 'react';
import { render } from 'react-dom';

const instance =renderInstance({
  settings: {
    locale: setupLocalizer({
      language: getUserLocale,
      messages: {
        de: {},
        en: {},
      },
    }),
    menu: {
      items: [...setupMenu(), ...setupFooter()],
    },
  },
  plugins: [createAuthApi(), createSearchApi()],
  requestPilets() {
    return fetch('https://feed.piral.cloud/api/v1/pilet/foodies')
      .then((res) => res.json())
      .then((res) => res.items);
  },
  layout,
  errors,
});


const app = (
  <Piral instance={instance}>
    <SetRoute path="/" component={() => <Redirect to="/login" />} />
  </Piral>
);

render(app, document.querySelector('#app'));