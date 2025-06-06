import scottishWidowsLogo from 'assets/common/logo-mobile.scottish-widows.svg';

import { getThemeFromUrl } from '../../../utils/getThemeFromUrl';
import dataQaIds from '../../dataModel/dataQaIds';
import _base from '../_base';
import { ExampleContent } from '../ExampleAppContent';

const { BRAND_NAME } = (window as any).appConfig;

/* eslint no-param-reassign: "error" */
const heroComponent = _base.homepage.heroComponentContent.filter((el) => {
  if (
    el['data-qa-id'] === dataQaIds.mainPage.sdkHero &&
    (getThemeFromUrl() || BRAND_NAME) === 'scottish-widows'
  ) {
    el.imageSrc = scottishWidowsLogo;
    el.subHeading =
      'A software development kit (SDK) for building web apps tailored to Scottish Widows';
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
