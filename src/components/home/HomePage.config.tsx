import { MouseEventHandler } from 'react';


export interface HeroComponentProps {
  heading?: string;
  subHeading?: string;
  description?: string;
  buttonLink?: MouseEventHandler<HTMLButtonElement>;
  buttonText?: string;
}
