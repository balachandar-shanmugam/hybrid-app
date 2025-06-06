import { ParagraphWdio } from '@interstellar/wdio-dependencies';

import Hero from './Hero';

export default class HeroWdio extends ParagraphWdio implements Hero {
  constructor(name: string, locator: string) {
    super(name, locator);
  }

  // This is an example of an additional method
  // new test component will contain this and parent ones
  async additionalMethodExample(): Promise<void> {
    console.log(`This should log the element locator: ${this.locator}`);
    // Reusing method from super class
    const textFromSuperClassMethod: string = await this.getText();
    console.log(textFromSuperClassMethod);
  }

  // this method is only an example
  // to show how to use native wdio commands
  // please DO NOT use, it will fail
  async customMethod(): Promise<string> {
    // you can use global variables from wdio without importing them
    // EXAMPLES:
    // const elements = $$('locatorForMultipleElements');
    // console.log(browser.getCookies());
    return $(this.locator).getText();
  }
}
