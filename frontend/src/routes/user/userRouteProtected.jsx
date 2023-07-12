import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const UserRouteProtected = () => {
  const { isAuth } = useSelector(state => state.auth);

  if (isAuth === false) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
