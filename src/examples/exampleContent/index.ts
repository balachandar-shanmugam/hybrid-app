import { Brand } from 'components/brandProvider';

import birminghamMidshiresContent from './birmingham-midshires';
import blackHorseContent from './black-horse';
import bosContent from './bos';
import { ExampleContent } from './ExampleAppContent';
import halifaxContent from './halifax';
import lloydsContent from './lloyds';
import lloyds2023Content from './lloyds-2023';
import mbnaContent from './mbna';
import scottishWidowsContent from './scottish-widows';

interface AppContentResolverContext {
  brand: Brand;
}

export default ({ brand }: AppContentResolverContext): ExampleContent => {
  switch (brand) {
    case 'lloyds':
      return lloydsContent;

    case 'lloyds-2023':
      return lloyds2023Content;

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
