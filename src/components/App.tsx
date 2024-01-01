import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import routes, { RouteDefinition } from "./routes";
import {Provider} from "react-redux";
import { getLogin } from '../services/authService';

const ProtectedRoute = (login: string | null, route: RouteDefinition, redirectPath: string = '/login') => {
  if (!login && route.requireAuth) {
    // redirect to login page
    return <Navigate to={redirectPath} replace />
  }
  return <Route path={route.url} element={route.Element} />
}

function App() {
  let login: string | null;
  login = getLogin();
  
  return (
    <div>
      <Navbar/>
      <Routes>
        {routes.map((route) => (
          <Route path={route.url} element={<route.Element/>}/>
        ))}
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;
