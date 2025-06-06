import React from 'react';

import { BrowserRouter } from '@interstellar/react-app-routing';
import { fireEvent } from '@testing-library/react';

import WebView from './WebView';
import renderWithTheme from '../../../__tests__/__utils__/renderWithTheme';
import { Brand } from '../../../components/brandProvider';
import webview from '../../exampleContent/_base/webview';

jest.mock('@interstellar/react-app-content', () => ({
  useContent: jest.fn(() => ({ ...webview })),
  // useNgaBridge: jest.fn(() => ({ ngaBridge : {isIos: jest.fn()} })),
}));

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

jest.spyOn(console, 'error').mockImplementation(() => {});
jest.spyOn(console, 'info').mockImplementation(() => {});

describe('layout with no real JSBridge', () => {
  it('renders the webview header correctly', () => {
    const screen = renderWithTheme(
      <BrowserRouter>
        <WebView />
      </BrowserRouter>,
      { BRAND_NAME: Brand.LLOYDS },
    );
    const screenText = screen.getByText('WebView (JSBridge) Demo');
    expect(screenText).toBeInTheDocument();
  });

  it('renders the webview description correctly', () => {
    const screen = renderWithTheme(
      <BrowserRouter>
        <WebView />
      </BrowserRouter>,
      { BRAND_NAME: Brand.LLOYDS },
    );
    const screenText = screen.getByText(
      'Below are examples of how we implement the JSBridge. Although we ',
      {
        exact: false,
      },
    );

    expect(screenText).toBeInTheDocument();
  });

  it('renders the isIos button correctly', () => {
    const screen = renderWithTheme(
      <BrowserRouter>
        <WebView />
      </BrowserRouter>,
      { BRAND_NAME: Brand.LLOYDS },
    );
    const screenText = screen.getByText('isIos');
    fireEvent.click(screen.getByText(/isIos/i));
    expect(screenText).toBeInTheDocument();
  });

  it('renders the isAndroid button correctly', () => {
    const screen = renderWithTheme(
      <BrowserRouter>
        <WebView />
      </BrowserRouter>,
      { BRAND_NAME: Brand.LLOYDS },
    );
    const screenText = screen.getByText('isAndroid');
    fireEvent.click(screen.getByText(/isAndroid/i));
    expect(screenText).toBeInTheDocument();
  });

  it('renders the closeCwaJourney button correctly', () => {
    const screen = renderWithTheme(
      <BrowserRouter>
        <WebView />
      </BrowserRouter>,
      { BRAND_NAME: Brand.LLOYDS },
    );
    const screenText = screen.getByText('closeCwaJourney');
    fireEvent.click(screen.getByText(/closeCwaJourney/i));
    expect(screenText).toBeInTheDocument();
  });

  it('renders the hideSpinner button correctly', () => {
    const screen = renderWithTheme(
      <BrowserRouter>
        <WebView />
      </BrowserRouter>,
      { BRAND_NAME: Brand.LLOYDS },
    );
    const screenText = screen.getByText('hideSpinner');
    fireEvent.click(screen.getByText(/hideSpinner/i));
    expect(screenText).toBeInTheDocument();
  });

  it('renders the showSpinner button correctly', () => {
    const screen = renderWithTheme(
      <BrowserRouter>
        <WebView />
      </BrowserRouter>,
      { BRAND_NAME: Brand.LLOYDS },
    );
    const screenText = screen.getByText('showSpinner');
    fireEvent.click(screen.getByText(/showSpinner/i));
    expect(screenText).toBeInTheDocument();
  });

  it('renders the onFinish button correctly', () => {
    const screen = renderWithTheme(
      <BrowserRouter>
        <WebView />
      </BrowserRouter>,
      { BRAND_NAME: Brand.LLOYDS },
    );
    const screenText = screen.getByText('onFinish');
    fireEvent.click(screen.getByText(/onFinish/i));
    expect(screenText).toBeInTheDocument();
  });
});
