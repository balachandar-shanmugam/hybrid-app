import React from 'react';

import { screen } from '@testing-library/react';

import Content, { ContentProps } from './ContentComponent';
import renderWithTheme from '../../../../__tests__/__utils__/renderWithTheme';
import { Brand } from '../../../../components/brandProvider/BrandProvider';

const contentComponentChildren = [
  {
    imageSrc: './src/assets/common/cli.jpeg',
    imageDesc:
      'Faster execution with the CLI.</strong> Executes commands designed to harmonise the coding approach between teams. You can quickly and easily create journeys with a few simple commands.',
    imgAltText: 'CLI Logo',
  },
];

const contentComponentProps: ContentProps = {
  heading: 'Test heading',
  description: 'Test Desc',
  promoBoxes: [
    {
      imageDesc: 'Test 1',
    },
  ],
};
describe('Content', () => {
  it('renders Content without children', () => {
    renderWithTheme(<Content {...contentComponentProps} />, {
      BRAND_NAME: Brand.LLOYDS,
    });
    const heading = screen.getByText('Test heading');
    expect(heading).toBeInTheDocument();

    const description = screen.getByText('Test Desc');
    expect(description).toBeInTheDocument();
  });

  it('renders Content with children', () => {
    renderWithTheme(
      <Content
        {...contentComponentProps}
        promoBoxes={contentComponentChildren}
      />,
      {
        BRAND_NAME: Brand.LLOYDS,
      },
    );
    const heading = screen.getByText('Test heading');
    expect(heading).toBeInTheDocument();

    const description = screen.getByText('Test Desc');
    expect(description).toBeInTheDocument();

    const componentChildrenText = screen.getByText(
      'Faster execution with the CLI.',
      { exact: false },
    );
    expect(componentChildrenText).toBeInTheDocument();
  });
});
