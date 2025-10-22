import {
  MdHome,
  MdDashboard,
  MdLeaderboard,
  MdSchool,
  MdGroups,
  MdQuiz,
  MdPerson,
  MdSettings,
  MdPolicy,
  MdGavel,
  MdLogout,
  MdDeveloperBoard,
} from "react-icons/md";

export const navRouters = [
  { name: "Home", nav: "/", auth: false, admin: false, icon: MdHome },
  { name: "Dashboard", nav: "/dashboard/", auth: true, admin: false, icon: MdDashboard },
  { name: "Profile", nav: "/dashboard/profile", auth: true, admin: false, icon: MdPerson },
  { name: "Marketplace", nav: "/marketplace", auth: false, admin: false, icon: MdPolicy },
  { name: "Portfolio", nav: "/portfolio", auth: false, admin: false, icon: MdGavel },
  { name: "Terms", nav: "/term", auth: false, admin: false, icon: MdGavel }
];

export const LOCAL_STORAGE_KEYS = {
  USER: 'techxplora-user',
  ACCESS_TOKEN: 'access_token',
  GET_QUESTION: 'question',
  REFRESH_TOKEN: 'refresh_token',
  TOKEN_EXPIRE_TIME: 'access_token_expiry',
  WALLET: "wallet details",
  CART: "Carts",
  ORDER: "Orders",
  SUB: "Subs"
} as const;


export const rangeTime = (a: number) => {
  const seconds = a * 60;

  if (seconds < 60) {
    return `${Math.floor(seconds)} sec`;
  } else if (seconds < 3600) {
    return `${Math.floor(seconds / 60)} min`;
  } else {
    return `${(seconds / 3600).toFixed(1)} hr`; // 1 decimal for hours
  }
};
