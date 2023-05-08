import React from "react";
import NoPageFound from "./NoPageFound";

const LOGIN = React.lazy(() => import("./Admin/Login.jsx"));
const LANDING_PAGE = React.lazy(() => import("./Admin/Home"));
const REGISTER = React.lazy(() => import("./Admin/Register.jsx"));
const STATS = React.lazy(() => import("./Admin/Stats.jsx"));
const SUBMIT_REGISTRATION = React.lazy(() => import("./Admin/SubmitRegistration.jsx"));

const WEB_PAGES = {
  // LOGIN PAGES
  LOGIN,
  LANDING_PAGE,
  STATS,
  REGISTER,
  SUBMIT_REGISTRATION,

  // Mo page found
  NO_PAGE_FOUND: NoPageFound,
};
export default WEB_PAGES;
