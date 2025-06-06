import React, { ReactElement } from 'react';

import { ContentProvider } from '@interstellar/react-app-content';
import { Routes, Route } from '@interstellar/react-app-routing';
import NotFound from 'routes/notFound/NotFound';

import AboutUs from './aboutUs/AboutUs';
import * as routes from './manifest';
import WebView from './webview/WebView';
import useAppConfig from '../../components/appConfig/useAppConfig';
import content from '../../content';
import exampleContent from '../exampleContent';

function ExampleRoutes(): ReactElement {
  const brand = useAppConfig().BRAND_NAME;
  return (
    <Routes>
      <Route
        path={routes.AboutUs}
        element={
          <ContentProvider value={exampleContent({ brand }).aboutus}>
            <AboutUs />
          </ContentProvider>
        }
      />
      <Route
        path={routes.WebView}
        element={
          <ContentProvider value={exampleContent({ brand }).webview}>
            <WebView />
          </ContentProvider>
        }
      />
      <Route
        path="*"
        element={
          <ContentProvider value={content({ brand }).notfound}>
            <NotFound />
          </ContentProvider>
        }
      />
    </Routes>
  );
}

export default ExampleRoutes;
