import { HeaderContent } from 'components/header/HeaderComponent.config';
import { NotFoundContent } from 'routes/notFound/NotFound.config';
import { HomePageContent } from '../routes/homePage/HomePage.config';
import { TradePageContent } from 'components/trade/TradePage.styled';

export interface AppContent {
  homepage: HomePageContent;
  notfound: NotFoundContent;
  tradepage: TradePageContent;
  layoutContent: HeaderContent;
}
