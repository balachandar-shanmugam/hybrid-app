import React, { ReactElement } from 'react';

import { ContentProvider } from '@interstellar/react-app-content';
import { Routes, Route } from '@interstellar/react-app-routing';

import HomePage from './homePage/HomePage';
import * as routes from './manifest';
import NotFound from './notFound/NotFound';
import useAppConfig from '../components/appConfig/useAppConfig';
import content from '../content';
import ExampleRoutes from '../examples/exampleRoutes';
import { getThemeFromUrl } from '../utils/getThemeFromUrl';

function App(): ReactElement {
  const brandConfig = useAppConfig().BRAND_NAME;
  const brand = getThemeFromUrl() || brandConfig;

  return (
    <Routes>
      <Route
        path={routes.Home}
        element={
          <ContentProvider value={content({ brand }).homepage}>
            <HomePage />
          </ContentProvider>
        }
      />
      <Route path={routes.Examples} element={<ExampleRoutes />} />
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

export default App;
