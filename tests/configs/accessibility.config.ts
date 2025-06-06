import type { Options } from '@wdio/types';

import { config as baseConfig } from './base.config';

export const config: Options.Testrunner = {
  ...baseConfig,
  specs: ['../features/accessibility.feature'],
  //this is necessary because I excluded accessibility tests in the base config
  exclude: [],
};
