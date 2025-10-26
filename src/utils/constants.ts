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

interface UserAssets {
  id: string;
  assetId: string;
  shares: number;
  type: number;
  amount: number;
  payment: number;
  userId: string;
  created_at: string;
  updated_at: string;
}

interface Investments {
  id: string;
  title: string;
  details: string;
  amount: number;
  measurement: number;
  shares: number;
  lat: number;
  lng: number;
  status: number;
  payment: number;
  type: number;
  sub: number;
  percentage: number;
  image: string;
  user_id: string;
  investor: string;
  [key: string]: any; // allows extra unknown fields
}

interface InvestmentGroup {
  userAssets: UserAssets;
  investments: Investments;
}

export function sumUserAssets(
  data: InvestmentGroup[][] | InvestmentGroup[]
): {
  totalShares: number;
  totalAmount: number;
  averagePercentage: number;
} {
  let totalShares = 0;
  let totalAmount = 0;
  let totalPercentage = 0;
  let investmentCount = 0;

  // Flatten nested arrays if necessary
  const flattenedData = Array.isArray(data[0])
    ? (data as InvestmentGroup[][]).flat()
    : (data as InvestmentGroup[]);

  for (const item of flattenedData) {
    if (item.userAssets) {
      totalShares += Number(item.userAssets.shares) || 0;
      totalAmount += Number(item.userAssets.amount) || 0;
    }

    if (item.investments && typeof item.investments.percentage === "number") {
      totalPercentage += item.investments.percentage;
      investmentCount++;
    }
  }

  const averagePercentage =
    investmentCount > 0 ? totalPercentage / investmentCount : 0;

  return {
    totalShares,
    totalAmount,
    averagePercentage: Number(averagePercentage.toFixed(2)),
  };
}
