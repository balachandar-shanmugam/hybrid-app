import React from 'react';

import { screen } from '@testing-library/react';

import PromoBox from './PromoBoxComponent';
import renderWithTheme from '../../../../__tests__/__utils__/renderWithTheme';
import { Brand } from '../../../../components/brandProvider/BrandProvider';

const promoBoxContent = {
  imageSrc: './src/assets/common/cli.jpeg',
  imageDesc:
    'Faster execution with the CLI.</strong> Executes commands designed to harmonise the coding approach between teams. You can quickly and easily create journeys with a few simple commands.',
  imgAltText: 'CLI Logo',
};

describe('PromoBox', () => {
  it('renders PromoBox with correct text and images', () => {
    renderWithTheme(<PromoBox {...promoBoxContent} />, {
      BRAND_NAME: Brand.LLOYDS,
    });

    const promoText = screen.getByText('Faster execution with the CLI.', {
      exact: false,
    });
    expect(promoText).toBeInTheDocument();

    const promoLogo = screen.getByRole('img');
    expect(promoLogo).toBeInTheDocument();
    expect(promoLogo).toHaveAttribute('alt', 'CLI Logo');
    expect(promoLogo).toHaveAttribute('src', './src/assets/common/cli.jpeg');
  });

  it('renders PromoBox with correct text and not images', () => {
    promoBoxContent.imageSrc = '';
    renderWithTheme(<PromoBox {...promoBoxContent} />, {
      BRAND_NAME: Brand.LLOYDS,
    });

    const promoText = screen.getByText('Faster execution with the CLI.', {
      exact: false,
    });
    expect(promoText).toBeInTheDocument();

    const promoLogo = screen.queryByTestId('promo-box-img-container');
    expect(promoLogo).not.toBeInTheDocument();
  });
});
