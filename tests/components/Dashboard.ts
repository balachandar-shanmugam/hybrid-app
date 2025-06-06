import { ParagraphWdio } from '@interstellar/wdio-dependencies';

export default class DashboardWdio extends ParagraphWdio {
  constructor(name: string, locator: string) {
    super(name, locator);
  }
}
