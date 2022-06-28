import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Form, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useUserAuth } from "../context/UserAuthContext";

const SignUp = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const getOtp = (e) => {
    e.preventDefault();
    console.log(number);
  };

  return (
    <div className="p-4 box">
      <h2 className="mb-3">Firebase Phone Auth</h2>
      {error && <Alert variant="Danger">{error}</Alert>}
      <Form onSubmit={getOtp}>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <PhoneInput
            defaultCountry="IN"
            value={number}
            onChange={setNumber}
            placeholder="Enter Phone Number"
          ></PhoneInput>
          <div id="recaptcha-container"></div>
        </Form.Group>
        <div className="button-right">
          <Link to="/">
            <Button variant="Secondary">Cancel</Button> &nbsp
          </Link>
          <Button variant="Success">Send OTP</Button>
        </div>
      </Form>
    </div>
  );
};
export default SignUp;
