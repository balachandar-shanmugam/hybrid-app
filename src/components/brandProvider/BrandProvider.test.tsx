import React, { ReactElement } from 'react';

import birminghamMidshiresTheme from '@constellation/core/themes/birmingham-midshires';
import blackhorseTheme from '@constellation/core/themes/black-horse';
import bosTheme from '@constellation/core/themes/bos';
import halifaxTheme from '@constellation/core/themes/halifax';
import lloydsTheme from '@constellation/core/themes/lloyds';
import lloyds2023Theme from '@constellation/core/themes/lloyds-2023';
import mbnaTheme from '@constellation/core/themes/mbna';
import scottishWidowsTheme from '@constellation/core/themes/scottish-widows';
import { render } from '@testing-library/react';

import BrandProvider from './BrandProvider';

import { Brand } from '.';

const mockConstellationBrandProvider = jest.fn();

interface BrandProviderProps {
  theme: Brand;
  children: ReactElement;
}

jest.mock('@constellation/core', () => ({
  BrandProvider: ({ theme, children }: BrandProviderProps): ReactElement => {
    mockConstellationBrandProvider(theme);
    return <div>{children}</div>;
  },
}));

describe('BrandProvider', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  describe('Resolves a brand name to the correct corrlating theme and provides it to the Constellaiton BrandProvider', () => {
    it(`should set ${Brand.BOS} brand within the context and render the data with correct context`, () => {
      render(<BrandProvider brand={Brand.BOS}>Test {Brand.BOS}</BrandProvider>);
      expect(mockConstellationBrandProvider).toHaveBeenCalledWith(
        expect.objectContaining(bosTheme),
      );
    });

    it(`should set ${Brand.HALIFAX} brand within the context and render the data with correct context`, () => {
      render(
        <BrandProvider brand={Brand.HALIFAX}>
          Test {Brand.HALIFAX}
        </BrandProvider>,
      );
      expect(mockConstellationBrandProvider).toHaveBeenCalledWith(
        expect.objectContaining(halifaxTheme),
      );
    });

    it(`should set ${Brand.LLOYDS} brand within the context and render the data with correct context`, () => {
      render(
        <BrandProvider brand={Brand.LLOYDS}>Test {Brand.LLOYDS}</BrandProvider>,
      );
      expect(mockConstellationBrandProvider).toHaveBeenCalledWith(
        expect.objectContaining(lloydsTheme),
      );
    });

    it(`should set ${Brand.MBNA} brand within the context and render the data with correct context`, () => {
      render(
        <BrandProvider brand={Brand.MBNA}>Test {Brand.MBNA}</BrandProvider>,
      );
      expect(mockConstellationBrandProvider).toHaveBeenCalledWith(
        expect.objectContaining(mbnaTheme),
      );
    });

    it(`should set ${Brand.SCOTTISH_WIDOWS} brand within the context and render the data with correct context`, () => {
      render(
        <BrandProvider brand={Brand.SCOTTISH_WIDOWS}>
          Test {Brand.SCOTTISH_WIDOWS}
        </BrandProvider>,
      );
      expect(mockConstellationBrandProvider).toHaveBeenCalledWith(
        expect.objectContaining(scottishWidowsTheme),
      );
    });

    it(`should set ${Brand.BIRMINGHAM_MIDSHIRES} brand within the context and render the data with correct context`, () => {
      render(
        <BrandProvider brand={Brand.BIRMINGHAM_MIDSHIRES}>
          Test {Brand.BIRMINGHAM_MIDSHIRES}
        </BrandProvider>,
      );
      expect(mockConstellationBrandProvider).toHaveBeenCalledWith(
        expect.objectContaining(birminghamMidshiresTheme),
      );
    });

    it(`should set ${Brand.LLOYDS_2023} brand within the context and render the data with correct context`, () => {
      render(
        <BrandProvider brand={Brand.LLOYDS_2023}>
          Test {Brand.LLOYDS_2023}
        </BrandProvider>,
      );
      expect(mockConstellationBrandProvider).toHaveBeenCalledWith(
        expect.objectContaining(lloyds2023Theme),
      );
    });

    it(`should set ${Brand.BLACK_HORSE} brand within the context and render the data with correct context`, () => {
      render(
        <BrandProvider brand={Brand.BLACK_HORSE}>
          Test {Brand.BLACK_HORSE}
        </BrandProvider>,
      );
      expect(mockConstellationBrandProvider).toHaveBeenCalledWith(
        expect.objectContaining(blackhorseTheme),
      );
    });
  });
});
