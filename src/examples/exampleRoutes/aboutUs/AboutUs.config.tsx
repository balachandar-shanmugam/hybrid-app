import { Content } from '@interstellar/react-app-content';

export interface AboutUsContent extends Content {
  header?: string;
  content?: string;
  subContent?: string;
  supportHeader?: string;
  supportContent?: string;
  supportLink?: string;
  supportLinkText?: string;
  sharepointLink?: string;
}
