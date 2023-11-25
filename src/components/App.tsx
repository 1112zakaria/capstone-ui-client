import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import routes from "./routes";
import {Provider} from "react-redux";

function App() {
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
