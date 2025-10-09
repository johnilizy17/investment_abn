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
  { name: "Leaderboard", nav: "/dashboard/leaderboard", auth: true, admin: false, icon: MdLeaderboard },
  { name: "All Teacher", nav: "/dashboard/teacher", auth: true, admin: true, icon: MdSchool },
  { name: "Syllabus", nav: "/dashboard/syllabus", auth: true, admin: true, icon: MdDeveloperBoard },
  { name: "Groups", nav: "/dashboard/group", auth: true, admin: false, icon: MdGroups },
  { name: "Quizzes", nav: "/dashboard/quizzes", auth: true, admin: false, icon: MdQuiz },
  { name: "Profile", nav: "/dashboard/profile", auth: true, admin: false, icon: MdPerson },
  { name: "Settings", nav: "/dashboard/settings", auth: true, admin: true, icon: MdSettings },
  { name: "Marketplace", nav: "/marketplace", auth: false, admin: false, icon: MdPolicy },
  { name: "Portfolio", nav: "/portfolio", auth: false, admin: false, icon: MdGavel },
  { name: "Sign out", nav: "/dashboard/signout", auth: false, admin: false, icon: MdLogout },
];

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
