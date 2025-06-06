import React from 'react';

import { screen } from '@testing-library/react';

import Page from './HomePage';
import renderWithTheme from '../../__tests__/__utils__/renderWithTheme';
import { Brand } from '../../components/brandProvider/BrandProvider';
import homePage from '../../examples/exampleContent/_base/exampleHome';

jest.mock('@interstellar/react-app-content', () => ({
  useContent: jest.fn(() => ({ ...homePage })),
}));

describe('Page', () => {
  it('renders first Hero component', () => {
    renderWithTheme(<Page />, {
      BRAND_NAME: Brand.LLOYDS,
    });
    const firstHeroText = screen.getByText(
      'A software development kit (SDK) for building web apps tailored to Lloyds Bank',
    );
    expect(firstHeroText).toBeInTheDocument();

    const firstHeroButton = screen.getByText('Playground');
    expect(firstHeroButton).toBeInTheDocument();
  });

  it('renders second Hero component', () => {
    renderWithTheme(<Page />, {
      BRAND_NAME: Brand.LLOYDS,
    });
    const secondHeroText = screen.getByText(
      `Built using the Group's own Design System, Constellation`,
    );
    expect(secondHeroText).toBeInTheDocument();
  });
  it('renders the promo boxes', () => {
    renderWithTheme(<Page />, {
      BRAND_NAME: Brand.LLOYDS,
    });
    const cliText = screen.getByText(
      /Save time and streamline workflows with the CLI/,
    );
    expect(cliText).toBeInTheDocument();
    const storybookText = screen.getByText(
      /Component configuration with Storybook./,
    );
    expect(storybookText).toBeInTheDocument();
    const webpackText = screen.getByText(/Module management with Webpack/);
    expect(webpackText).toBeInTheDocument();
    const typescriptText = screen.getByText(/Strong typing with Typescript/);
    expect(typescriptText).toBeInTheDocument();
    const jestText = screen.getByText(/Unit tests with Jest/);
    expect(jestText).toBeInTheDocument();
    const wdioText = screen.getByText(/BDD with WDIO/);
    expect(wdioText).toBeInTheDocument();
    const axeText = screen.getByText(/Accessibility with Axe Core/);
    expect(axeText).toBeInTheDocument();
  });
});
