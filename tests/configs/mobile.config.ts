import { GalaxyS21 } from '@interstellar/devices/dist/Devices';
import { capabilitiesFactory } from '@interstellar/wdio-dependencies';
import type { Options } from '@wdio/types';

import { config as baseConfig } from './base.config';

// This is an example custom device config
// override its values or duplicate it, then pass it to the
// capabilitiesFactory to use your custom configuration
const customDeviceConfig = {
  maxInstances: 4,
  browserName: 'chrome',
  width: 400,
  height: 900,
  userAgent: 'myCustomUserAgent',
};

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [
    capabilitiesFactory(customDeviceConfig),
    capabilitiesFactory(GalaxyS21),
  ],

  /* eslint-disable @typescript-eslint/no-unused-vars */
  before: async function (capabilities, specs, browser) {
    // TODO: this search works, BUT needs to be optimised...
    let width, height;
    for (let capability in capabilities) {
      if (capability.includes('chromeOptions')) {
        let flags = capabilities[capability]['args'];
        for (let flag of flags) {
          if (flag.includes('window-size')) {
            let regex = /\d+/g;
            let dimensions = flag.match(regex);
            width = parseInt(dimensions[0]);
            height = parseInt(dimensions[1]);
          }
        }
      }
    }

    //this is necessary when breakpoint is smaller than about 400px: window doesn't get resized
    await globalThis.browser.setWindowRect(0, 0, width, height);

    // this output is only for verification
    // for breakpoints < 400px, real window size won't match specified values,
    // it will always be fixed at about 500px
    console.log(await globalThis.browser.getWindowSize());
    console.log(await globalThis.browser.getWindowRect());
  },
};
