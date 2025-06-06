import header from 'content/_base/header';
import notfound from 'content/_base/notfound';

import aboutus from './aboutus';
import homepage from './exampleHome';
import webview from './webview';
import { ExampleContent } from '../ExampleAppContent';

const content: ExampleContent = {
  homepage,
  aboutus,
  webview,
  notfound,
  layoutContent: { ...header },
};

export default content;
