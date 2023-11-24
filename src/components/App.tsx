import React from 'react';
import logo from '../logo.svg';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";

function App() {
  return (
      <div>
          <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={"Login page"} />
            <Route path="/register" element={"Register page"} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
  );
}

export default App;
