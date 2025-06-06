import React, { ReactNode } from 'react';

import { BrandProvider as ConstellationBrandProvider } from '@constellation/core';
import BirminghamMidshiresTheme from '@constellation/core/themes/birmingham-midshires';
import BlackHorseTheme from '@constellation/core/themes/black-horse';
import BosTheme from '@constellation/core/themes/bos';
import HalifaxTheme from '@constellation/core/themes/halifax';
import LloydsTheme from '@constellation/core/themes/lloyds';
import Lloyds2023Theme from '@constellation/core/themes/lloyds-2023';
import MbnaTheme from '@constellation/core/themes/mbna';
import ScottishWidowsTheme from '@constellation/core/themes/scottish-widows';
import { DefaultTheme } from 'styled-components';

import GlobalStyle from './GlobalStyles';

export enum Brand {
  BOS = 'bos',
  HALIFAX = 'halifax',
  LLOYDS = 'lloyds',
  LLOYDS_2023 = 'lloyds-2023',
  MBNA = 'mbna',
  SCOTTISH_WIDOWS = 'scottish-widows',
  BIRMINGHAM_MIDSHIRES = 'birmingham-midshires',
  BLACK_HORSE = 'black-horse',
}

const getTheme = (brand: Brand): DefaultTheme => {
  switch (brand) {
    case Brand.BOS: {
      return BosTheme;
    }
    case Brand.HALIFAX: {
      return HalifaxTheme;
    }
    case Brand.MBNA: {
      return MbnaTheme;
    }
    case Brand.SCOTTISH_WIDOWS: {
      return ScottishWidowsTheme;
    }
    case Brand.BIRMINGHAM_MIDSHIRES: {
      return BirminghamMidshiresTheme;
    }
    case Brand.BLACK_HORSE: {
      return BlackHorseTheme;
    }
    case Brand.LLOYDS_2023: {
      return Lloyds2023Theme;
    }
    case Brand.LLOYDS:
    default: {
      return LloydsTheme;
    }
  }
};

const getThemeFromUrl = (): Brand => {
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get('theme');

  const urlTheme = Object.keys(Brand).find((key) => Brand[key] === theme);

  return Brand[urlTheme];
};

function BrandProvider({
  children,
  brand,
}: {
  brand: Brand;
  children: ReactNode;
}): React.JSX.Element {
  const themeBrand = getThemeFromUrl() || brand;

  return (
    <>
      <GlobalStyle />
      <ConstellationBrandProvider theme={getTheme(themeBrand)}>
        {children}
      </ConstellationBrandProvider>
    </>
  );
}

export default BrandProvider;
