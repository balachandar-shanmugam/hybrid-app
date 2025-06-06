import React from 'react';

import { BrowserRouter, MemoryRouter } from '@interstellar/react-app-routing';
import { screen } from '@testing-library/react';

import App from './App';
import renderWithTheme from '../../__tests__/__utils__/renderWithTheme';
import { Brand } from '../brandProvider';

jest.mock('@interstellar/nga-bridge-react', () => ({
  useNgaBridgeWrapper: jest.fn().mockImplementation(() => ({
    isIos: jest.fn(),
    isAndroid: jest.fn(),
    closeCwaJourney: jest.fn(),
    hideSpinner: jest.fn(),
    showSpinner: jest.fn(),
    onFinish: jest.fn(),
  })),
}));

describe('App', () => {
  const { env } = process;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
  });

  afterEach(() => {
    process.env = env;
  });

  it('renders App with correct text with lloyds brand and route to Home Page', () => {
    const route = '/';
    renderWithTheme(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>,
      { BRAND_NAME: Brand.LLOYDS },
    );

    const text = screen.getByText(
      'A software development kit (SDK) for building web apps tailored to Lloyds Bank',
    );
    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle(
      `font-family: "GT Ultra Median",system-ui,sans-serif;`,
    );
  });

  it('renders App with correct text text with halifax theme and route to About Us Page', () => {
    const route = '/about-us';
    renderWithTheme(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>,
      { BRAND_NAME: Brand.HALIFAX },
    );

    const text = screen.getByText('Our Mission');
    expect(text).toBeInTheDocument();
  });

  it('renders App with correct text text with halifax theme and route to Not Found Page', () => {
    const route = '/not-found';
    renderWithTheme(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>,
      { BRAND_NAME: Brand.HALIFAX },
    );

    const text = screen.getByText('Problem loading page');
    expect(text).toBeInTheDocument();
  });

  it('renders App with correct text with MBNA theme', () => {
    renderWithTheme(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { BRAND_NAME: Brand.MBNA },
    );

    const text = screen.getByText(
      'A software development kit (SDK) for building web apps tailored to Lloyds Bank',
    );
    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle(`font-family: "Full Slab",system-ui,sans-serif;`);
  });

  it('renders App with correct text with BOS theme', () => {
    process.env.BRAND_IN_CONTEXT = 'bos';

    renderWithTheme(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { BRAND_NAME: Brand.BOS },
    );

    const text = screen.getByText(
      'A software development kit (SDK) for building web apps tailored to Lloyds Bank',
    );
    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle(
      `font-family: "BoS Pill Gothic",system-ui,sans-serif;`,
    );
  });

  it('renders App with correct text with scottish-widows theme', () => {
    process.env.BRAND_IN_CONTEXT = 'scottish-widows';

    renderWithTheme(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { BRAND_NAME: Brand.SCOTTISH_WIDOWS },
    );

    const text = screen.getByText(
      'A software development kit (SDK) for building web apps tailored to Lloyds Bank',
    );
    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle(`font-family: UnitRounded,system-ui,sans-serif;`);
  });

  it('renders App with correct text with birmingham-midshires theme', () => {
    process.env.BRAND_IN_CONTEXT = 'birmingham-midshires';

    renderWithTheme(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { BRAND_NAME: Brand.BIRMINGHAM_MIDSHIRES },
    );

    const text = screen.getByText(
      'A software development kit (SDK) for building web apps tailored to Lloyds Bank',
    );
    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle(
      `font-family: "Source Sans Pro",system-ui,sans-serif;`,
    );
  });

  it('renders App with correct text with black-horse theme', () => {
    process.env.BRAND_IN_CONTEXT = 'black-horse';

    renderWithTheme(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { BRAND_NAME: Brand.BLACK_HORSE },
    );

    const text = screen.getByText(
      'A software development kit (SDK) for building web apps tailored to Lloyds Bank',
    );
    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle(
      `font-family: "Titillium Web",system-ui,sans-serif;`,
    );
  });
});
