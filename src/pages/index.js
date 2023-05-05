import React from "react";
import NoPageFound from "./NoPageFound";

const LOGIN = React.lazy(() => import("./Login/index"));
const LANDING_PAGE = React.lazy(() => import("./Admin/Home"));

const WEB_PAGES = {
  // LOGIN PAGES
  LOGIN,
  LANDING_PAGE,

  // Mo page found
  NO_PAGE_FOUND: NoPageFound,
};
export default WEB_PAGES;
