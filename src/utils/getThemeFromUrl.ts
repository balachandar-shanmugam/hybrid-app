import { Brand } from 'components/brandProvider';

export const getThemeFromUrl = (): Brand => {
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get('theme');

  const urlTheme = Object.keys(Brand).find((key) => Brand[key] === theme);

  return Brand[urlTheme];
};
