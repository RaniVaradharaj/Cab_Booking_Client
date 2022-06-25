import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WelcomePage from './components/WelcomePage'
import UserPage from './UserPage'
import DriverPage from './DriverPage'
import UserSignup from "./components/UserSignup";
import { Container } from "react-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/UserSignup" element={<UserSignup />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/UserPage" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App