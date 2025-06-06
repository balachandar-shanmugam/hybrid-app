import bankOfScotlandLogo from 'assets/common/bank-of-scotland-logo.png';

import { getThemeFromUrl } from '../../../utils/getThemeFromUrl';
import dataQaIds from '../../dataModel/dataQaIds';
import _base from '../_base';
import { ExampleContent } from '../ExampleAppContent';

const { BRAND_NAME } = (window as any).appConfig;

/* eslint no-param-reassign: "error" */
const heroComponent = _base.homepage.heroComponentContent.filter((el) => {
  if (
    el['data-qa-id'] === dataQaIds.mainPage.sdkHero &&
    (getThemeFromUrl() || BRAND_NAME) === 'bos'
  ) {
    el.imageSrc = bankOfScotlandLogo;
    el.subHeading =
      'A software development kit (SDK) for building web apps tailored to Bank Of Scotland';
  }
  return el;
});

_base.homepage = {
  ..._base.homepage,
  ...heroComponent,
};

const content: ExampleContent = {
  ..._base,
  ..._base.homepage,
};

export default content;
