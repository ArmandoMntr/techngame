import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// ----------------------------------------------------
// Firebase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMm0rUQu6Xl7vkNH10avzPHxIHapbexjA",
  authDomain: "techngames-c3efb.firebaseapp.com",
  projectId: "techngames-c3efb",
  storageBucket: "techngames-c3efb.appspot.com",
  messagingSenderId: "209545331016",
  appId: "1:209545331016:web:6e31fa8567d1017279737d",
};

initializeApp(firebaseConfig);

// --------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
