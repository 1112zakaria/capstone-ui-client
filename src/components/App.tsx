import React from 'react';
import logo from '../logo.svg';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

function App() {
  return (
      <div>
          <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
  );
}

export default App;
