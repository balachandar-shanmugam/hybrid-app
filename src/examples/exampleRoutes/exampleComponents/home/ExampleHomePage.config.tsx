import { ReactNode, MouseEventHandler } from 'react';

export interface PromoBoxProps {
  id?: number;
  imageSrc?: string;
  imageDesc?: ReactNode;
  imgAltText?: string;
  'data-qa-id'?: string;
}

export interface HeroComponentProps {
  imgAltText?: string;
  imageSrc?: string;
  heading?: string;
  subHeading?: string;
  description?: string;
  buttonLink?: MouseEventHandler<HTMLButtonElement>;
  constellationLinkSubheading?: string;
  windowsRepoText?: string;
  windowsRepoLink?: string;
  macRepoText?: string;
  macRepoLink?: string;
  storybookLinkSubheading?: string;
  macGcpText?: string;
  macGcpLink?: string;
  onPremLink?: string;
  onPremText?: string;
  onPremComingSoonText?: string;
  buttonInfo?: string;
  buttonText?: string;
  'data-qa-id'?: string;
}
