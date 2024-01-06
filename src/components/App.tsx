import React, { createContext, useState } from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import routes, { RouteDefinition } from "./routes";
import ProtectedRoute from './ProtectedRoute';
import { FC } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import {
  useContext
} from "react";

function App() {
  const { authToken } = useContext(AuthContext);
  
  return (
    <>
      <Navbar/>
      <Routes>
        {routes.map((route) => (
          <Route path={route.url} element={
            <ProtectedRoute login={authToken} route={route}/>}/>
        ))}
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  );
}

export default App;
