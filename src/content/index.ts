import { Brand } from 'components/brandProvider';

import { AppContent } from './AppContent';
import birminghamMidshiresContent from './birmingham-midshires';
import blackHorseContent from './black-horse';
import bosContent from './bos';
import halifaxContent from './halifax';
import lloydsContent from './lloyds';
import mbnaContent from './mbna';
import scottishWidowsContent from './scottish-widows';

interface AppContentResolverContext {
  brand: Brand;
}

export default ({ brand }: AppContentResolverContext): AppContent => {
  switch (brand) {
    case 'lloyds':
      return lloydsContent;

    case 'halifax':
      return halifaxContent;

    case 'bos':
      return bosContent;

    case 'mbna':
      return mbnaContent;

    case 'scottish-widows':
      return scottishWidowsContent;

    case 'birmingham-midshires':
      return birminghamMidshiresContent;

    case 'black-horse':
      return blackHorseContent;

    default:
      return lloydsContent;
  }
};
