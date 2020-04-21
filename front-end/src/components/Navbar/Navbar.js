import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import classNames from "classnames";
import "./Navbar.css"

export default function Navbar(props) {
  const { currentTab, setState, userId, email } = props;
  let history = useHistory();
  console.log(currentTab)
  useEffect(() => {
    
    switch(currentTab) {
      case "search":
        history.push("/");
      break;
      case "mypage":
        history.push("/mypage");
      break;
      case "signin":
        history.push("/signin");
      break;
      case "signup":
        history.push("/signup");
      break;
    }
  },[currentTab]);

  function backHome() {
    setState(prev => ({...prev, currentTab: "search"}));
  };

  function mypage() {
    if (userId) {
      setState(prev => ({...prev, currentTab: "mypage"}));
    } else {
      alert("Please log in first!")
    }
  };

  function userNameOrLogIn() {
    if (userId) {
      return `Hi ${email}!`
    } else {
      return "Log In"
    }
  };

  function LogOutOrSignUp() {
    if (userId) {
      return "Log Out" 
    } else {
      return "Sign Up"
    }
  };

  function logIn() {
    if (!userId) {
      setState(prev => ({...prev, currentTab: "signin"}));
    }
  };

  function signUp() {
    if (!userId) {
      setState(prev => ({...prev, currentTab: "signup"}));
    } else {
    axios
      .get(`/api/logout`)
      .then(() => setState(prev => ({...prev, userInfo:{}, currentTab: "search"})))
    }
  };

  return (
    <div className="navbar-container">
      <div className="dropshadow-bottom" />
      <div className="navbar">
        <div onClick={backHome} className={classNames({active: currentTab === "search"})} ><p>Search</p></div>
        <div onClick={mypage} className={classNames({active: currentTab === "mypage"})} ><p>My Page</p></div>
        <div>
          <button onClick={logIn} className={classNames({active: currentTab === "signin"})}>{userNameOrLogIn()}</button>
          <button onClick={signUp} className={classNames({active: currentTab === "signup"})}>{LogOutOrSignUp()}</button>
        </div>
      </div>
    </div>

  );
};