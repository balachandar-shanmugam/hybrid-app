import React from 'react';

import { screen } from '@testing-library/react';

import Hero from './HeroComponent';
import renderWithTheme from '../../../../__tests__/__utils__/renderWithTheme';
import { Brand } from '../../../../components/brandProvider/BrandProvider';

let agent;

beforeEach(() => {
  Object.defineProperty(window, 'navigator', {
    configurable: true,
    writable: true,
    value: { userAgent: agent },
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('Hero', () => {
  // This thGrids a prop type error, ignoring until we implement ts
  it('renders Hero without children', () => {
    renderWithTheme(<Hero imgAltText="Test text" imageSrc="www.test.com" />, {
      BRAND_NAME: Brand.LLOYDS,
    });
    const imageAltText = screen.getByAltText('Test text');
    expect(imageAltText).toBeInTheDocument();
  });

  it('renders Hero with children', () => {
    renderWithTheme(
      <Hero imgAltText="Test text" imageSrc="www.test.com">
        Hero children text
      </Hero>,
      {
        BRAND_NAME: Brand.LLOYDS,
      },
    );
    const imageAltText = screen.getByAltText('Test text');
    expect(imageAltText).toBeInTheDocument();

    const childrenText = screen.getByText('Hero children text');
    expect(childrenText).toBeInTheDocument();
  });

  it('renders in IE Mode with Image', () => {
    agent = 'MSIE';
    renderWithTheme(<Hero imgAltText="Test text" imageSrc="www.test.com" />, {
      BRAND_NAME: Brand.LLOYDS,
    });
    const imageAltText = screen.getByAltText('Test text');
    expect(imageAltText).toBeInTheDocument();
  });

  it('renders in IE Mode without Image', () => {
    agent = 'MSIE';
    renderWithTheme(<Hero imgAltText="Test text" imageSrc={null} />, {
      BRAND_NAME: Brand.LLOYDS,
    });
    const imageAltText = screen.getByAltText('Test text');
    expect(imageAltText).toBeInTheDocument();
  });

  it('renders in IE Mode with children', () => {
    agent = 'MSIE';
    renderWithTheme(
      <Hero imgAltText="Test text" imageSrc="www.test.com">
        Hero children text
      </Hero>,
      {
        BRAND_NAME: Brand.LLOYDS,
      },
    );
    const imageAltText = screen.getByAltText('Test text');
    expect(imageAltText).toBeInTheDocument();

    const childrenText = screen.getByText('Hero children text');
    expect(childrenText).toBeInTheDocument();
  });
});
