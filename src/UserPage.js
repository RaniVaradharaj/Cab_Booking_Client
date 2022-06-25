import React from 'react'
import UserSignup from "./components/UserSignup";
import DriverDetails from "./components/DriverDetails";
// import UserLogin from './components/UserLogin'
import UserTravelDetails from "./components/UserTravelDetails";
import UserConformation from "./components/UserConformation";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function UserPage() {
  return (
    <BrowserRouter>
      <Routes>
        <div>
          <Route path="/UserSignup" element={<UserSignup />} />
          CreateUser
        </div>
        <div>
          <Route path="/UserTravelDetails" element={<UserTravelDetails />} />
          UserTravelDetails
        </div>
        <div>
          <Route path="/DriverDetails" element={<DriverDetails />} />
          DriverDetails
        </div>
        <div>
          <Route path="/UserConformation" element={<UserConformation />} />
          UserConformation
        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default UserPage