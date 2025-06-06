import { PageStructure } from '@interstellar/test-components';
import {
  config as baseConfig,
  createPageStructure,
} from '@interstellar/wdio-dependencies';

import PageWdioExtended from '../components/PageExtendedWdio';

// TODO: find proper type for config const
export const config: any = {
  ...baseConfig,
  baseUrl: process.env.BASE_URL || 'http://localhost:8080/',
  //TODO: feature files location is relative to config file...
  //I'd love to find out a better solution, but, at least, we know why it's like that...
  specs: ['../features/*.feature'],
  exclude: [
    '../features/accessibility.feature',
    '../features/performance.feature',
    '../features/noJS.feature',
  ],
  services: ['intercept'],
  reporters: [
    'spec',
    [
      'cucumberjs-json',
      {
        jsonFolder: `tests/reports`,
      },
    ],
  ],
  capabilities: [
    {
      maxInstances: 4,
      browserName: process.env.BDD_NODE_BROWSER || 'chromium',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        binary: process.env.BDD_NODE_BROWSER
          ? '/usr/bin/' + process.env.BDD_NODE_BROWSER
          : '/usr/bin/chromium',
        args: [
          '--ignore-certificate-errors',
          '--allow-running-insecure-content',
          '--no-sandbox',
          '--disable-infobars',
          '--disable-gpu',
          '--window-size=1024,768',
        ],
      },
      'goog:loggingPrefs': { browser: 'ALL' },
      'wdio:chromedriverOptions': {
        binary: '/usr/bin/chromedriver',
      },
    },
  ],
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: [
      'tests/step-definitions/step_definitions.ts',
      'tests/step-definitions/assertions.ts',
    ],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ['pretty'],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: process.env.TAGS || '',
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },

  /**
   * Cucumber Hooks
   *
   * Runs before a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  beforeFeature: function (uri: string, feature: any) {
    let jsonPageStructure: PageStructure;
    for (const tagField of feature.tags) {
      const pageName: string = tagField.name.replace('@', '');
      const pageStructurePath: string = `${process.cwd()}/tests/structure/${pageName}.json`;
      jsonPageStructure = createPageStructure(pageStructurePath);
      globalThis[pageName] = new PageWdioExtended(jsonPageStructure);
    }
  },
};
