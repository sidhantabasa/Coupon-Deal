// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {  getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB6VpWqYdcGl6VVxYpoOWa-cHH-kFbrK8",
  authDomain: "coupon-deal-cd.firebaseapp.com",
  projectId: "coupon-deal-cd",
  storageBucket: "coupon-deal-cd.appspot.com",
  messagingSenderId: "276874118481",
  appId: "1:276874118481:web:d581727419ab4fed84ff70",
  measurementId: "G-33PDPHBD04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);