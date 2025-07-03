import { Content } from '@interstellar/react-app-content';
import axeImage from 'assets/common/axe.png';
import jpImage from 'assets/common/jp.svg';
import blackRockImage from 'assets/common/blackrock.svg';
import cnavImage from 'assets/common/FTCNAV.png';
import stateStreetImage from 'assets/common/ssi.svg';


export const TableHeader = ["Name","Type", "Currency", "Indicative P&L", "Best Bid", "Best Ask", "Available Balance"];

export const Funds = [
                { "icon": blackRockImage,"name": "Black Rock ICS Sterling Government  Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"9000", "ISN": "EOV673DBID67" },
                { "icon": blackRockImage,"name": "Black Rock ICS Sterling Liqidity Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"9,976,556", "ISN": "FOV673DBID67" },
                { "icon": stateStreetImage,"name": "State street Government Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"10", "ISN": "EOV2343DBD67" },
                { "icon": axeImage,"name": "ETH GBP Liquidity Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"31,110", "ISN": "JOV673DBID67" },
                { "icon": axeImage,"name": "ETH USD Liquidity", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"1,100", "ISN": "KOV673DBID67" },
                { "icon": cnavImage,"name": "CNAV US Government Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"0", "ISN": "RDV673DBID67" },
                { "icon": blackRockImage,"name": "Black Rock ICS Sterling Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"4,000", "ISN": "JOV673DBID67" },
                { "icon": blackRockImage,"name": "Black Rock ICS Euro Government  Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"18,000", "ISN": "EOEF73DBID67" },
                { "icon": jpImage,"name": "ETH GBP Liquidity Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"31,110", "ISN": "JOV673DBID67" },
                { "icon": jpImage,"name": "ETH USD Liquidity", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"1,100", "ISN": "KOV673DBID67" },
                { "icon": stateStreetImage,"name": "State street Government Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"10", "ISN": "EOV2343DBD67" },
                { "icon": axeImage,"name": "ETH GBP Liquidity Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"31,110", "ISN": "JOV673DBID67" },
                { "icon": axeImage,"name": "ETH USD Liquidity", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"1,100", "ISN": "KOV673DBID67" },
                { "icon": cnavImage,"name": "CNAV US Government Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"0", "ISN": "RDV673DBID67" },
                { "icon": blackRockImage,"name": "Black Rock ICS Euro Liqidity Fund", "type": "MMT", "currency": "GBP", "indicativePL": "-","best_bid":"£1","best_ask":"-","avail_bal":"6,976,556", "ISN": "FOV64GFBIDD3" },
                
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
