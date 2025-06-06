import { ComponentsWdio } from '@interstellar/wdio-dependencies';

import DashboardWdio from './Dashboard';
import HeroWdio from './Hero';

const ComponentsExtendedWdio = {
  ...ComponentsWdio,
  HeroWdio,
  DashboardWdio,
};

export { ComponentsExtendedWdio };
