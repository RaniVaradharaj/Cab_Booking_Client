import React from 'react'
import UserDetails from "./components/UserDetails";
import DriverLogin from "./components/DriverLogin";
import DriverPickups from "./components/DriverPickups";
import DriverReg from "./components/DriverReg";
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function DriverPage() {
  return (
    <BrowserRouter>
      <Routes>
        <div><Route path="/DriverReg" element={<DriverReg />} />Driver Registration</div>
        <div><Route path="/DriverPickups" element={<DriverPickups />} />Driver Loaction and Pickups</div>
        <div><Route path="/UserDetails" element={<UserDetails />} />Passenger Details</div>
      </Routes>
    </BrowserRouter>
  );
}

export default DriverPage