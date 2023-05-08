const PATH = {
  NOPAGE: "*",

  //  AUTH PATHS
  LOGIN: "/login",


  LANDING_PAGE: "/",
  STATS: "/stats",
  REGISTER: "/register",
  SUBMIT_REGISTRATION: "/submit-registration",

  //  USER PATHS
  USER_DASHBOARD: "/user/dashboard",

  // ADMIN PATHS
  ADMIN_USER_LIST: "/admin/users",

  // DATA INTEGRATION PATHS
  DATA_INTEGRATION: "/data-integration",
};

export default PATH;

export const PAGES_INFO = [
  // ADMIN PAGES INFO START
  {
    pathName: PATH.ADMIN_USER_MANAGEMENT_LIST,
    pages: [
      {
        title: "User Management",
        path: PATH.ADMIN_USER_MANAGEMENT_LIST,
      },
    ],
  }, 
  // ADMIN PAGES INFO END

  // USER PAGES INFO START
  {
    pathName: PATH.USER_DASHBOARD,
    pages: [
      {
        title: "Dashboard",
        path: PATH.USER_DASHBOARD,
      },
    ],
  }
];
