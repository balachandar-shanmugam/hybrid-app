import { Content } from '@interstellar/react-app-content';

export interface SummaryCardProps {
  title: string;
  highlight: {
    label: string;
    subtext?: string;
    amount: string;
  };
  items: {
    label: string;
    value: string;
  }[];
  actions?: {
    label: string;
    onClick: () => void;
  }[];
}
