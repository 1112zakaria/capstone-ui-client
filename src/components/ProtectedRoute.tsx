import React from "react";
import { Navigate } from "react-router-dom";
import { RouteDefinition } from "./routes";

interface ProtectedRouteProps {
  login: string | null;
  route: RouteDefinition;
  redirectPath?: string;
};

export const allowRoute = (isLoggedIn: boolean, route: RouteDefinition) => {
  // do not allow route render if:
  // - !isLoggedIn and requiresAuth
  // - isLoggedIn and requiredLoggedOut
  return !(!isLoggedIn && route.requireAuth || isLoggedIn && route.requireLoggedOut);
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({login, route, redirectPath = '/'}) => {
  const isLoggedIn = login != null;
  if (!allowRoute(isLoggedIn, route)) {
    // redirect to login page
    return <Navigate to={redirectPath} replace />
  }
  return <route.Element />
};

export default ProtectedRoute;