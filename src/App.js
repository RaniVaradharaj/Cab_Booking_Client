import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WelcomePage from './components/WelcomePage'
import UserPage from './UserPage'
import DriverPage from './DriverPage'
import CreateUser from './components/CreateUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/WelcomePage" element={<WelcomePage />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/UserPage" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App