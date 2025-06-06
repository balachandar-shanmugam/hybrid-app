import blackHorseLogo from 'assets/common/black-horse.svg';
import webpackLogo from 'assets/common/webpack_bh.png';

import { getThemeFromUrl } from '../../../utils/getThemeFromUrl';
import dataQaIds from '../../dataModel/dataQaIds';
import _base from '../_base';
import { ExampleContent } from '../ExampleAppContent';

const { BRAND_NAME } = (window as any).appConfig;

/* eslint no-param-reassign: "error" */
const heroComponent = _base.homepage.heroComponentContent.filter((el) => {
  if (
    el['data-qa-id'] === dataQaIds.mainPage.sdkHero &&
    (getThemeFromUrl() || BRAND_NAME) === 'black-horse'
  ) {
    el.imageSrc = blackHorseLogo;
    el.subHeading =
      'A software development kit (SDK) for building web apps tailored to Black Horse';
  }
  return el;
});
const promoBoxComponent = _base.homepage.promoBoxContent.filter((el) => {
  if (el.id === 3 && (getThemeFromUrl() || BRAND_NAME) === 'black-horse') {
    el.imageSrc = webpackLogo;
  }
  return el;
});

_base.homepage = {
  ..._base.homepage,
  ...heroComponent,
  ...promoBoxComponent,
};

const content: ExampleContent = {
  ..._base,
  ..._base.homepage,
};

export default content;
