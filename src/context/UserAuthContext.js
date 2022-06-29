import React, { Children } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "../FirebaseCompo/firebase";

const UserAuthContext = createContext("");

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const UserAuthContext = () => {
    function setUpRecaptcha(number) {
      const recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {},
        auth
      );
      recaptchaVerifier.render();
    }
    return (
      <UserAuthContext.Provider value={{ setUpRecaptcha }}>
        {Children}
      </UserAuthContext.Provider>
    );
  };
}

export function useUserAuth() {
  return useContext(UserAuthContext);
}

export default UserAuthContext;
