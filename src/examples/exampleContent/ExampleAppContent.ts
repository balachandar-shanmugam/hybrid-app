import { HeaderContent } from 'components/header/HeaderComponent.config';
import { NotFoundContent } from 'routes/notFound/NotFound.config';
import { HomePageContent } from 'src/examples/exampleRoutes/exampleComponents/home/ExampleHomePageContent';

import { AboutUsContent } from '../exampleRoutes/aboutUs/AboutUs.config';
import { WebViewContent } from '../exampleRoutes/webview/WebView.config';

export interface ExampleContent {
  homepage: HomePageContent;
  aboutus: AboutUsContent;
  notfound: NotFoundContent;
  layoutContent: HeaderContent;
  webview: WebViewContent;
}
