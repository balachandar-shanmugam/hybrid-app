import { PageStructure } from '@interstellar/test-components';
import {
  config as baseConfig,
  PageWdio,
  createPageStructure,
} from '@interstellar/wdio-dependencies';

//TODO: if I remove baseUrl from config and import it from base config
// I can remove this method: it is already available in base config
const readURLFromEnvVariable = function (): string {
  if (process.env.BASE_URL) {
    return process.env.BASE_URL;
  }
};

export const config: any = {
  ...baseConfig,
  // TODO: try to remove this, check todo above
  baseUrl: readURLFromEnvVariable() || 'http://localhost:9001',
  //TODO: feature files location is relative to config file...
  //I'd love to find out a better solution, but, at least, we know why it's like that...
  specs: ['../features/examples/*.feature'],
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
  verbose: false,
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
      'wdio:chromedriverOptions': {
        binary: '/usr/bin/chromedriver',
      },
    },
  ],
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: [
      'tests/step-definitions/examples/example_step_definitions.ts',
      'tests/step-definitions/examples/example_assertions.ts',
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
    tagExpression: '',
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
  beforeFeature: function (uri, feature) {
    let jsonPageStructure: PageStructure;
    for (const tagField of feature.tags) {
      const pageName = tagField.name.replace('@', '');
      const pageStructurePath = `${process.cwd()}/tests/structure/examples/${pageName}.json`;
      jsonPageStructure = createPageStructure(pageStructurePath);
      globalThis[pageName] = new PageWdio(jsonPageStructure);
    }
  },
};
