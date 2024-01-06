import React from "react";
import { Navigate } from "react-router-dom";
import { RouteDefinition } from "./routes";

interface ProtectedRouteProps {
  login: string | null;
  route: RouteDefinition;
  redirectPath?: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({login, route, redirectPath = '/'}) => {
  if (!login && route.requireAuth || login && route.requireLoggedOut) {
    // redirect to login page
    return <Navigate to={redirectPath} replace />
  }
  return <route.Element />
};

export default ProtectedRoute;