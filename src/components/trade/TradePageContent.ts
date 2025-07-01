import { Content } from '@interstellar/react-app-content';

export interface HomePageContent extends Content {
  coreFeaturesDesc?: string;
  heroComponentContent?: HeroComponentProps[];
}

export const AccTableHead = {
                  "ACTION" :"Action",
                  "ACC_NO" :"Account number",
                  "SORT" :"Sort code",
                  "ACC_NAME" :"Legal account name",
                  "NICK_NAME" :"Preferred name",
                  "AVAIL_BAL" :"Closing available balance",
                  "BOOK_BAL" :"Closing booked balance",
                  "INTERIM_BAL" :"Interim available balance",
                  "INTERIM_BOOK_BAL" :"Interim booked balance",
}

export const TableHeader = ["Name","Type", "Currency", "Indicative P&L", "Best Bid", "Best Ask", "Available Balance","Interim Bal", "Closing Balance"];


export const SummaryTitle = {
    TITLE_CA: "Black Rock ICS Sterling Government Liquidity fund",
    TITLE_CB: "Closing Booked Balance"
}
