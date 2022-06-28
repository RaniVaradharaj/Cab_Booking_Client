import { initializeApp } from "firebase/app";
import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5WDcuR7_dwj6iN1sq_fKkKXgfwEjAj_A",
  authDomain: "cabbooking-3981.firebaseapp.com",
  projectId: "cabbooking-3981",
  storageBucket: "cabbooking-3981.appspot.com",
  messagingSenderId: "775788040009",
  appId: "1:775788040009:web:11383ef0a652dc60bf9498",
  measurementId: "G-NF1KQRBZQN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
