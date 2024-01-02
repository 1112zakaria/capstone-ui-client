import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import routes, { RouteDefinition } from "./routes";
//import {Provider} from "react-redux";
import { getLogin } from '../services/authService';
import ProtectedRoute from './ProtectedRoute';

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
