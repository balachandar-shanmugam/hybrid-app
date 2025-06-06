import { ExampleContent } from '../ExampleAppContent';

const webview: ExampleContent['webview'] = {
  header: 'WebView (JSBridge) Demo',
  content: `Below are examples of how we implement the JSBridge. Although we do not have a real JSBridge in this environment we can check the console to confirm that the expected functions are being called.`,
  demoContent: `Additionally we have a demo of how to conditionally show certain components e.g. your header and footer if you are in a WebView state. In order to do this you just need to conditionally render your React elements based on the isNgaBridgeAvailable() call value. To see this in action you just have to append '?isWebview=true' to the url and you will see the header and footer disappear. Additionally you can also edit the .env and .env.example files and change the IS_WEBVIEW value to 'true'`,
};

export default webview;
