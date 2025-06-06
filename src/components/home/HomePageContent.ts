import { Content } from '@interstellar/react-app-content';

import { HeroComponentProps, PromoBoxProps } from './HomePage.config';

export interface HomePageContent extends Content {
  coreFeaturesDesc?: string;
  promoBoxContent?: PromoBoxProps[];
  heroComponentContent?: HeroComponentProps[];
}
