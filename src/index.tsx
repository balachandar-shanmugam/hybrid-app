/* eslint-disable import/no-extraneous-dependencies */
import 'core-js/stable';
import React from 'react';

import { BrowserRouter } from '@interstellar/react-app-routing';
import { createRoot } from 'react-dom/client';

import App from './components/app/App';
import AppConfigContext from './components/appConfig/AppConfigContext';

const mount = (containerElement, customProps = {}) => {
  const root = createRoot(containerElement);

  /* eslint-disable no-console */
  console.log('customProps: ', customProps);
  root.render(
    <AppConfigContext.Provider value={(window as any).appConfig}>
      <BrowserRouter basename={(window as any).appConfig.BASE_PATH}>
        <App />
      </BrowserRouter>
    </AppConfigContext.Provider>,
  );
};

const container = document.getElementById('app');

if (process.env.NODE_ENV === 'development' || container) {
  if (container) {
    mount(container, { isRemote: false });
  }
}

export { mount };
