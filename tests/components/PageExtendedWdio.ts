import { PageStructure } from '@interstellar/test-components';
import { PageWdio } from '@interstellar/wdio-dependencies';

import { ComponentsExtendedWdio } from './ComponentsExtendedWdio';

class PageWdioExtended extends PageWdio {
  constructor(jsonStructure: PageStructure) {
    super(jsonStructure);
  }

  createComponentObject(componentType: any, componentName: any, locator: any) {
    return new ComponentsExtendedWdio[componentType + 'Wdio'](
      componentName,
      locator,
    );
  }
}

export default PageWdioExtended;
