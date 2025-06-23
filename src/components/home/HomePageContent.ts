import { Content } from '@interstellar/react-app-content';

import { HeroComponentProps } from './HomePage.config';

export interface HomePageContent extends Content {
  coreFeaturesDesc?: string;
  heroComponentContent?: HeroComponentProps[];
}

export const AccTableHead = {
                  "ACTION" :"Action",
                  "ACC_NO" :"Account number",
                  "SORT" :"Sort code",
                  "ACC_NAME" :"Legal account name",
                  "NICK_NAME" :"Preferred name",
                  "AVAIL_BAL" :"Closing available balance",
                  "BOOK_BAL" :"Closing booked balance",
                  "INTERIM_BAL" :"Interim available balance",
                  "INTERIM_BOOK_BAL" :"Interim booked balance",
}
