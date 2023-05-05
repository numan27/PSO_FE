/** @format */

import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./Routes/ProtectedRoute.jsx";
import PublicRoute from "./Routes/PublicRoute";
import WEB_PAGES from "../pages";
import PATH from "../utils/path";

function RouterConfig() {
  return (
    <Routes>
      {/* AUTH ROUTES START */}
      <Route
        path={PATH.LOGIN}
        element={<PublicRoute element={<WEB_PAGES.LOGIN />} />}
      />
      <Route
        path={PATH.LANDING_PAGE}
        element={<PublicRoute element={<WEB_PAGES.LANDING_PAGE />} />}
      />

      {/* NO PAGE FOUND */}
      <Route path={PATH.NOPAGE} element={<WEB_PAGES.NO_PAGE_FOUND />} />
    </Routes>
  );
}

export default RouterConfig;
