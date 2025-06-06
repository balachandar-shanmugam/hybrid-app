import React from 'react';

import { BrowserRouter } from '@interstellar/react-app-routing';

import AboutUs from './AboutUs';
import renderWithTheme from '../../../__tests__/__utils__/renderWithTheme';
import { Brand } from '../../../components/brandProvider';
import aboutus from '../../exampleContent/_base/aboutus';

jest.mock('@interstellar/react-app-content', () => ({
  useContent: jest.fn(() => ({ ...aboutus })),
}));

describe('layout', () => {
  it('renders the about us header correctly', () => {
    const screen = renderWithTheme(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>,
      { BRAND_NAME: Brand.LLOYDS },
    );
    const screenText = screen.getByText('Our Mission');
    expect(screenText).toBeInTheDocument();
  });

  it('renders the about us description correctly', () => {
    const screen = renderWithTheme(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>,
      { BRAND_NAME: Brand.LLOYDS },
    );
    const screenText = screen.getByText('to build and deliver secure', {
      exact: false,
    });
    expect(screenText).toBeInTheDocument();
  });
});
