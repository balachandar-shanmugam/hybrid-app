import { Content } from '@interstellar/react-app-content';
export const SummaryCardBalance = {
    title:"Balance",
    highlight:{
      label: "Available Balance",
      subtext: "Last update: 15-04-25",
      amount: "£9,976,556"
      },
    items:[
         { label: "Last Buy Price", value: "£1" },
         { label: "Valuation Price", value: "£1" }
        ],
    actions:""

}

export const SummaryCardTrade = {
    title:"Trading",
    highlight:"",
    items:[
          { label: "Primary Price", value: "£1" },
          { label: "Available Units", value: "936,466,000" },
          { label: "Redemption Price", value: "£1" }
        ],
    actions:[
      { label: "Redeem", type:"secondary", onClick: () => console.log("Redeem clicked") },
      { label: "Invest",  type:"primary", onClick: () => console.log("Invest clicked") }
    ]

}
