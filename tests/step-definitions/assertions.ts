const assert = require('node:assert');

import { Checkbox, Heading, Link } from '@interstellar/test-components';
import { Then, generateAxeReport } from '@interstellar/wdio-dependencies';
import Dashboard from '../components/Dashboard';
import Hero from '../components/Hero';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

Then('SDK container is displayed', async function () {
  const sdkContainer: Hero = mainPage.getComponent('sdkContainer');
  const containsSdkContainer: boolean = await mainPage.contains(sdkContainer);
  assert(containsSdkContainer === true);
});

Then('Constellation container is displayed', async function () {
  const constellationContainer: Hero = mainPage.getComponent(
    'constellationContainer',
  );
  const containsConstContainer: boolean = await mainPage.contains(
    constellationContainer,
  );
  assert(containsConstContainer === true);
});

Then('Footer container is displayed', async function () {
  const footerContainer: Hero = mainPage.getComponent('footerContainer');
  const containsFooterContainer: boolean =
    await mainPage.contains(footerContainer);
  assert(containsFooterContainer === true);
});

Then('Dashboard is displayed', async function () {
  const dashboard: Dashboard = mainPage.getComponent('dashboard');
  const containsDashboard: boolean = await mainPage.contains(dashboard);
  assert(containsDashboard === true);
});

Then('About Us page should be displayed', async function () {
  const aboutUsHeading: Heading = aboutPage.getComponent('ourMission');
  const containsAboutUsHeading: boolean =
    await aboutPage.contains(aboutUsHeading);
  assert(containsAboutUsHeading === true);
});

Then('Problem page should be displayed', async function () {
  const problemHeading: Heading = problemPage.getComponent('problem');
  const containsProblemHeading: boolean =
    await problemPage.contains(problemHeading);
  assert(containsProblemHeading === true);
});

Then('Accessibility report is generated', async function () {
  const accessibilityResults: object = this.accessibilityScan.results;
  const accessibilityPageName: string = this.accessibilityScan.pageName;
  generateAxeReport(accessibilityResults, `${accessibilityPageName}Page`);
});

Then('There are no violations', async function () {
  const violations: Array<object> =
    this.accessibilityScan.results['violations'];
  let hasViolations: boolean = violations.length > 0;
  if (hasViolations) {
    assert(
      false,
      '\x1b[33m Accessibility failure(s) found, please check report!!!\x1b[0m',
    );
  }
});

// We strongly recommend to use the other keyword, There are no violations
// This keyword can be used when there are some known violations that can be waived to go live
Then(
  'There are no more than {string} violations',
  async function (maxViolations) {
    const maxViolationsThreshold: number = parseInt(maxViolations);
    const violations: Array<object> =
      this.accessibilityScan.results['violations'];
    let hasViolations: boolean = violations.length > maxViolationsThreshold;
    if (hasViolations) {
      assert(
        false,
        '\x1b[33m Accessibility failure(s) found, please check report!!!\x1b[0m',
      );
    }
  },
);

Then('I can log performance metrics', async function () {
  console.log(mainPage.getMetrics());
});

Then('I can log performance score', async function () {
  console.log(mainPage.getPerformanceScore());
});

Then(
  'Performance score is above {string}',
  async function (performanceThreshold: string) {
    const performanceThresholdPercentage: number =
      parseInt(performanceThreshold) / 100;
    assert(mainPage.getPerformanceScore() > performanceThresholdPercentage);
  },
);

Then('nga bridge is initiated', async function () {
  const logs = await webviewPage.getLogs();
  for (let log of logs) {
    if (
      log.message.includes('running webview initiateJavaScriptBridge function')
    ) {
      return true;
    }
  }
  throw new Error('Javascript bridge not initiated!');
});

Then('webview callback is triggered', async function () {
  const logs = await webviewPage.getLogs();
  for (let log of logs) {
    if (log.message.includes('running webview isIos function')) {
      return true;
    }
  }
  throw new Error('Javascript bridge callback not initiated!');
});

Then('Webview heading is displayed', async function () {
  const webviewHeading: Heading = webviewPage.getComponent('webViewDemo');
  const isWebviewHeadingDisplayed: boolean =
    await webviewPage.contains(webviewHeading);
  assert(isWebviewHeadingDisplayed === true);
});

Then('Webview header is displayed', async function () {
  const webviewHeader: Heading = webviewPage.getComponent('webViewHeader');
  const isWebviewHeaderDisplayed: boolean =
    await webviewPage.contains(webviewHeader);
  assert(isWebviewHeaderDisplayed === true);
});

Then('Webview footer is displayed', async function () {
  const webviewFooter: Heading = webviewPage.getComponent('webViewFooter');
  const isWebviewFooterDisplayed: boolean =
    await webviewPage.contains(webviewFooter);
  assert(isWebviewFooterDisplayed === true);
});

Then('Webview header is not displayed', async function () {
  const webviewHeader: Heading = webviewPage.getComponent('webViewHeader');
  const isWebviewHeaderDisplayed: boolean =
    await webviewPage.contains(webviewHeader);
  assert(isWebviewHeaderDisplayed === false);
});

Then('Webview footer is not displayed', async function () {
  const webviewFooter: Heading = webviewPage.getComponent('webViewFooter');
  const isWebviewFooterDisplayed: boolean =
    await webviewPage.contains(webviewFooter);
  assert(isWebviewFooterDisplayed === false);
});

Then('overridden Callback is triggered', async function () {
  const logs = await webviewPage.getLogs();
  console.log(logs);
  throw new Error('This is not fully implemented');
});

Then('checkbox is displayed', async function () {
  const checkbox: Checkbox = aboutPage.getComponent('checkbox');
  const isCheckboxDisplayed: boolean = await aboutPage.contains(checkbox);
  assert(isCheckboxDisplayed === true);
});

Then('error is displayed', async function () {
  const checkboxError: Checkbox = aboutPage.getComponent('checkboxError');
  const isErrorVisible: boolean = await aboutPage.contains(checkboxError);
  assert(isErrorVisible === true);
});

Then('get text while error is present', async function () {
  const checkbox: Checkbox = aboutPage.getComponent('checkbox');
  const errorMessage: string = await checkbox.getText();
  assert(errorMessage === 'Check me');
});

Then('error message is test', async function () {
  const checkbox: Checkbox = aboutPage.getComponent('checkboxError');
  const errorMessage: string = await checkbox.getText();
  assert(errorMessage === 'test');
});

Then('the no JS message is displayed', async function () {
  const noJsMessage: Heading = mainPage.getComponent('noJsHeading');
  const isNoJsMessageVisible: boolean = await mainPage.contains(noJsMessage);
  assert(isNoJsMessageVisible === true);
});

Then('the chrome link is displayed', async function () {
  const chromeLink: Link = mainPage.getComponent('noJsChrome');
  const isChromeLinkVisible: boolean = await mainPage.contains(chromeLink);
  assert(isChromeLinkVisible === true);
});

Then('the edge link is displayed', async function () {
  const edgeLink: Link = mainPage.getComponent('noJsEdge');
  const isEdgeLinkVisible: boolean = await mainPage.contains(edgeLink);
  assert(isEdgeLinkVisible === true);
});

Then('the safari link is displayed', async function () {
  const safariLink: Link = mainPage.getComponent('noJsSafari');
  const isSafariLinkVisible: boolean = await mainPage.contains(safariLink);
  assert(isSafariLinkVisible === true);
});

Then('the firefox link is displayed', async function () {
  const firefoxLink: Link = mainPage.getComponent('noJsFirefox');
  const isFirefoxLinkVisible: boolean = await mainPage.contains(firefoxLink);
  assert(isFirefoxLinkVisible === true);
});

Then('the opera link is displayed', async function () {
  const operaLink: Link = mainPage.getComponent('noJsOpera');
  const isOperaLinkVisible: boolean = await mainPage.contains(operaLink);
  assert(isOperaLinkVisible === true);
});

Then('the chrome link is reachable', async function () {
  const chromeLink: Link = mainPage.getComponent('noJsChrome');
  const linkAddress: string = await chromeLink.getLink();
  const finalAddress: string = 'https:' + linkAddress;
  const response: Response = await fetch(finalAddress, { method: 'HEAD' });
  assert(response.status === 200);
});

Then('the edge link is reachable', async function () {
  const edgeLink: Link = mainPage.getComponent('noJsEdge');
  const linkAddress: string = await edgeLink.getLink();
  const finalAddress: string = 'https:' + linkAddress;
  const response: Response = await fetch(finalAddress, { method: 'HEAD' });
  assert(response.status === 200);
});

Then('the safari link is reachable', async function () {
  const safariLink: Link = mainPage.getComponent('noJsSafari');
  const linkAddress: string = await safariLink.getLink();
  const finalAddress: string = 'https:' + linkAddress;
  const response: Response = await fetch(finalAddress, { method: 'HEAD' });
  assert(response.status === 200);
});

Then('the firefox link is reachable', async function () {
  const firefoxLink: Link = mainPage.getComponent('noJsFirefox');
  const linkAddress: string = await firefoxLink.getLink();
  const finalAddress: string = 'https:' + linkAddress;
  const response: Response = await fetch(finalAddress, { method: 'HEAD' });
  assert(response.status === 200);
});

Then('the opera link is reachable', async function () {
  const operaLink: Link = mainPage.getComponent('noJsOpera');
  const linkAddress: string = await operaLink.getLink();
  const finalAddress: string = 'https:' + linkAddress;
  const response: Response = await fetch(finalAddress, { method: 'HEAD' });
  assert(response.status === 200);
});
