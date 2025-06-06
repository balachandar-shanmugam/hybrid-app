# Test the new journey

The InterStellar Test Suite enables unit testing, provides ability to run functional tests, and accessibility checks to help improve the overall code quality, providing an opportunity to adopt shift-left testing. The Test Suite includes common functionalities and keywords ready for consumption to minimise the complexity of running tests for the web app created. It uses the following packages:

- [**JestJS**](https://jestjs.io/) for unit testing.
- [**Cucumberjs**](https://cucumber.io/docs/installation/javascript/) to run feature files.
- [**WebdriverIO**](https://webdriver.io/) for functional testing.
- [**axe-core**](https://www.npmjs.com/package/axe-core) for accessibility.

## 1. Setting up tests

The Starter Kit installation includes the **pw-dependencies** package and no further libraries are required to be installed. Check the `node_modules` folder in `starter-kit`, it should have a non-empty folder called `pw-dependencies`. Please check that the app is up and running as well as reachable on a given port of your local machine before proceeding. **Default port is 8080**, however, starter-kit can be made available on a specific port using a parameter in the script to launch it.

## 2. Executing unit tests

- Run `npm run test` to begin executing unit tests. If there are changes to specific files, run `npm run test:watch` to automatically run unit tests on changed files.
- To know about your unit test coverage, run `npm run test:coverage` to generate the test coverage report. It indicates whether the unit tests meet the minimum threshold for high quality code, and the specific files where it is below the threshold.

## 3. Functional testing of the app

### Prerequisites
- Make sure the app is up and running.

### Executing the bdd tests
- Two default feature files - `app.feature` and `routing.feature` - are available to run functional testing for the basic app.
- Running the `app.feature` and `routing.feature` files is preconfigured in `base.config.ts`.
- Run `npm run bdd:local` to set the ENV variable to local and then execute tests on default port 8080.
- If you wish to run tests against a different port from the default one (**8080**), then you can do so by specifying an environment variable before calling the script from the **package.json**

```
PORT=<port_number> npm run bdd:local
```
- To run bdd tests tailored to your app's functionality, update the `app.feature` and `routing.feature` file or create a new feature file under the `tests/features` folder. If it is a new feature file, then you must create a new config file  or extend the existing one - please see the **Configuration files** section for more details. Continue testing with the commands as above.

## 4. Accessibility testing of the app

### Prerequisites
- Make sure the app is up and running.

### Executing the accessibility tests
- A default feature file - `accessibility.feature` - is available to run accessibility testing for the basic app.
- Run `npm run bdd:accessibility` to execute the default accessibility tests. Running the `accessibility.feature` file is pre-configured in `accessibility.config.ts`.
- If you wish to run tests against a different port from the default one (**8080**), then you can do so by specifying an environment variable before calling the script from the *package.json*

```
PORT=<port_number> npm run bdd:accessibility
```
- To run accessibility tests tailored for you app's functionality, update the `accessibility.feature` file or create a new feature file under `tests/features`. If it is a new feature file, then you must create a new config file or extend the existing one - please see Configuration files section for more details. Continue testing with the commands as above.

## 5. Configuration files

- All the standard configurations are defined at `tests/configs`.
- If you want to add your own config but still want to leverage the predefined config, please follow these steps:
  - Create your own config file under `tests/configs/`, e.g. `mytest.config.ts` or `myaccessibilitytest.config.ts`.
  - Import the config files from `@interstellar/wdio-dependencies` repo. e.g. `import { config as baseConfig } from '@interstellar/wdio-dependencies';`.
  - Include the base config in your config file using the syntax below:
    ```
    exports.config = {
    ...baseConfig,
    //insert your parameters here
    }
    ```
  - Amend your alias in `package.json` to target the newly created config as: `"bdd:": "rm -rf tests/reports/* && interstellar run wdio ./tests/configs/mytest.config.ts ; npm run report"`.
