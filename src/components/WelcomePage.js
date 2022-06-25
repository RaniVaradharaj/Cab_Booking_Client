import React from 'react'
// import { Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import UserLogin from './UserLogin';

function WelcomePage() {
  
  return (
    <div className="container">
      <div className="row">
        <div className="ps-0 pt-0 col-8">
          Welcome to
          <b>
            <h1>
              <i>SPEEDO CABS</i>
            </h1>
          </b>
          <h3>
            <i>"It feels good to be lost in the right direction"</i>
          </h3>
          <div>
            <h4>
              <i>Take the Adventure</i>
              <i className="fa-solid fa-car-side-bolt"></i>
            </h4>
          </div>
        </div>

        <div className="pageright ps-5 p-0 container col-4 register">
          <i>
            <h2>Take a Ride</h2>
          </i>
          <h4>
            <Link to='/CreateUser'className="bg-warning p-3 regbtn">Register</Link>
          </h4>
          <div>Already have Account?</div>
          <h4>
            <button className="bg-primary p-3 loginbtn">Login</button>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage