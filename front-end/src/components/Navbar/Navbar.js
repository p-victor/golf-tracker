import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Navbar.css"

export default function Navbar(props) {
  const { currentTab, setState, userId, email } = props;
  const location = useLocation();
  let history = useHistory();
  
  useEffect(() => {
    
    switch(currentTab) {
      case "search":
        history.push("/");
      break;
      case "search":
        history.push("/");
      break;
      case "search":
        history.push("/");
      break;
      case "mypage":
        history.push("/mypage");
      break;
    }
  },[currentTab]);

  function backHome() {
    setState(prev => ({...prev, currentTab: "search"}));
  };

  // function news() {
  //   if (!active[1]) {
  //     history.push("/news");
  //   }
  // };

  // function contact() {
  // if (!active[1]) {  
  //   history.push("/contact");
  //   }
  // };

  function mypage() {
    if (location.state) {
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
      history.push("/signin");
    }
  };
  console.log("ui", userId, email)

  function signUp() {
    if (!userId) {
      history.push("/signup");
    } else {
      history.push("/");
    }
  };

  return (
    <div className="navbar-container">
      <div className="dropshadow-bottom" />
      <div className="navbar">
        <div onClick={backHome} className={classNames({active: currentTab === "search"})} ><p>Search</p></div>
        <div onClick={mypage} className={classNames({active: currentTab === "mypage"})} ><p>My Page</p></div>
        <div>
          <button onClick={logIn} >{userNameOrLogIn()}</button>
          <button onClick={signUp} >{LogOutOrSignUp()}</button>
        </div>
      </div>
    </div>

  );
};