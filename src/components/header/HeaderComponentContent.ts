export const menuData = [
  { name: "Accounts", link: "/"},
  { name: "Payments" , link: "not-found"},
  { name: "Admin", link: "found" },
  { name: "Alerts",  link: "found1" },
  { name: "Approvals",  link: "found2"  },
  { name: "Reports",  link: "found"  },
  { name: "Digital Assets", 
      subMenu: [
        {name:"Trade", link:"trade"},
        {name:"Transfer", link:"transfer-fund"},
      ]
  }
];
