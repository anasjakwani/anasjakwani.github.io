import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Signup from "./components/Signup";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Login />
    <Signup />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
