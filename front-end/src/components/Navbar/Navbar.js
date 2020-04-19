import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Navbar.css"

export default function Navbar(props) {
  const [ active, setActive] = useState(["active", "", "", ""]);
  const location = useLocation();
  let history = useHistory();

  function backHome() {
    if (!active[0]) {
      setActive(["active", "", "", ""]);
      history.push("/", {userId: location.state.userId, email: location.state.email});
    }
  };

  // function news() {
  //   if (!active[1]) {
  //     setActive(["", "active", "", ""]);
  //     history.push("/news", {userId: location.state.userId, email: location.state.email});
  //   }
  // };

  // function contact() {
  // if (!active[1]) {  
  //   setActive(["", "", "active", ""]);
  //   history.push("/contact", {userId: location.state.userId, email: location.state.email});
  //   }
  // };

  function mypage() {
    if (location.state) {
      setActive(["", "", "", "active"]);
      history.push("/mypage", {userId: location.state.userId, email: location.state.email});
    } else {
      alert("Please log in first!")
    }
  };

  function userNameOrLogIn() {
    if (location.state && location.state.userId) {
      return `Hi ${location.state.email}!`
    } else {
      return "Log In"
    }
  };

  function LogOutOrSignUp() {
    if (location.state && location.state.userId) {
      return "Log Out" 
    } else {
      return "Sign Up"
    }
  };

  function logIn() {
    if (!location.state) {
      history.push("/signin");
    }
  };

  function signUp() {
    if (!location.state) {
      history.push("/signup");
    } else {
      history.push("/");
    }
  };

  return (
    <div className="navbar-container">
      <div className="dropshadow-bottom" />
      <div className="navbar">
        <div onClick={backHome} className={active[0]} ><p>Search</p></div>
        <div href="#news" className={active[1]}><p>Test2</p></div>
        <div href="#contact" className={active[2]} ><p>Test3</p></div>
        <div onClick={mypage} className={active[3]} ><p>My Page</p></div>
        <div>
          <button onClick={logIn} >{userNameOrLogIn()}</button>
          <button onClick={signUp} >{LogOutOrSignUp()}</button>
        </div>
      </div>
    </div>

  );
};