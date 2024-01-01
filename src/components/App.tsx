import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import routes, { RouteDefinition } from "./routes";
//import {Provider} from "react-redux";
import { getLogin } from '../services/authService';

interface ProtectedRouteProps {
  login: string | null;
  route: RouteDefinition;
  redirectPath?: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({login, route, redirectPath = '/'}) => {
  if (!login && route.requireAuth) {
    // redirect to login page
    return <Navigate to={redirectPath} replace />
  }
  return <route.Element />
}

function App() {
  let login: string | null;
  login = getLogin();

  return (
    <div>
      <Navbar/>
      <Routes>
        {routes.map((route) => (
          <Route path={route.url} element={
            <ProtectedRoute login={login} route={route}/>}/>
        ))}
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;
