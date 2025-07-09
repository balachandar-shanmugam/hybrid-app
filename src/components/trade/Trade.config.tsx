import { Content } from '@interstellar/react-app-content';



export interface TableData extends Content  {
 name: string;
 type: string;
 currency: string;
 indicativePL: string;
 bestBid: string;
 bestAsk: string;
}