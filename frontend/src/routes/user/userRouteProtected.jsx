import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const UserRouteProtected = () => {
  const [login, setLogin] = useState(false);

  if (login === false) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
