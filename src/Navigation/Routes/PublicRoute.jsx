import { useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import FullScreenLoader from "../../components/Layout/Loader/FullScreenLoader";
import Public from "../../components/Layout/PageStructure/Public";

function PublicRoute({ element }) {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      window.location.href = `/${user.role}/dashboard`;
    }
  }, [user]);

  if (user === undefined) return <FullScreenLoader />;

  return  (
    <Public>{element}</Public>
  );
}

PublicRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default PublicRoute;
