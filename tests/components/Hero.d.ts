import { Paragraph } from '@interstellar/test-components';

export interface Hero extends Paragraph {
  additionalMethodExample(): Promise<void>;
  customMethod(): Promise<string>;
}
