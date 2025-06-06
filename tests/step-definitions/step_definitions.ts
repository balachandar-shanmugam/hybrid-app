import { PageInterface, Button } from '@interstellar/test-components';
import { Given, When } from '@interstellar/wdio-dependencies';

Given('I am on the {string} page', async function (pageName) {
  const currentPage: PageInterface = globalThis[`${pageName}Page`];
  await currentPage.open();
});

When('I run accessibility on {string} page', async function (pageName) {
  const results: object = await globalThis[
    `${pageName}Page`
  ].runAccessibilityScan(globalThis.browser);
  this.accessibilityScan = {
    pageName: `${pageName}Page`,
    results: results,
  };
});

//Routing
When('I navigate directly to the About Us page', async function () {
  await aboutPage.open();
});

When('I navigate directly to the Home page', async function () {
  await mainPage.open();
});

When('I navigate to a non existing page', async function () {
  await nonExistingPage.open();
});

When('I navigate to a non existing page with subpath', async function () {
  await nonExistingSubpathPage.open();
});

When('I navigate to a non existing domain', async function () {
  await nonExistingDomainPage.open();
});

// Perf
Given('I want to record performance', async function () {
  return mainPage.enablePerformanceAudit();
});

When('I want to collect perf metrics', async function () {
  console.log('Metrics:');
  return mainPage.collectPerformanceMetrics();
});

When('I want to collect perf index', async function () {
  return mainPage.collectPerformanceIndex();
});

//Webview
When('I click on the ios button', async function () {
  const isIosButton: Button = webviewPage.getComponent('isIosButton');
  return isIosButton.click();
});

When('I click on the android button', async function () {
  const isAndroidButton: Button = webviewPage.getComponent('isAndroidButton');
  return isAndroidButton.click();
});

When('I override the android button callback', async function () {
  throw new Error('This is not implemented');
  // TODO: related scenario is not automated, leaving code for reference
  // const overrideScript: string = `window.JSBridge = { initiateJavaScriptBridge: () => \
  //   {
  //     console.log("initiateJavaScriptBridge")},
  //     showSpinner: () => {
  //       console.log("show spinner success")
  //     }
  //   };`;
  // return webviewPage.injectJS(overrideScript);
});

Given('I am on the webview page in webview mode', async function () {
  return webviewPage.open('?isWebview=true');
});

Given('I am on the webview page not in webview mode', async function () {
  return webviewPage.open('?isWebview=false');
});

When('JS is disabled', async function () {
  await mainPage.disableJS();
});
