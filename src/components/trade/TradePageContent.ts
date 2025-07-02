import { Content } from '@interstellar/react-app-content';

export const TableHeader = ["Name","Type", "Currency", "Indicative P&L", "Best Bid", "Best Ask", "Available Balance"];

export const Funds = [
                { "name": "Black Rock ICS Sterling Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"9000", "ISN": "EOV673DBID67" },
                { "name": "Black Rock ICS Sterling Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"9,976,556", "ISN": "FOV673DBID67" },
                { "name": "State street Government Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"10", "ISN": "EOV2343DBD67" },
                { "name": "ETH GBP Liquidity Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"31,110", "ISN": "JOV673DBID67" },
                { "name": "ETH USD Liquidity", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"1,100", "ISN": "KOV673DBID67" },
                { "name": "CNAV US Government Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"0", "ISN": "RDV673DBID67" },
                { "name": "Black Rock ICS Sterling Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"4,000", "ISN": "JOV673DBID67" }
                
             ];
export const SummaryTitle = {
    TITLE_CA: "Black Rock ICS Sterling Government Liquidity fund",
}

export enum Buttons {
  ALL = 'All',
  PRIMARY = 'Primary Sale',
  SECONDARY = 'Secondary Sale',
  REDEEMABLE = 'Redeemable Sale',
  MMF = 'MMF',
}
