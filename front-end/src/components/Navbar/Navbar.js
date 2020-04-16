import React from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import "./Navbar.css"

export default function Navbar(props) {

  return (
    <div>
      <div className="navbar">
        <div href="#home" className="" ><p>Test1</p></div>
        <div href="#news" className=""><p>Test2</p></div>
        <div href="#contact" className="active" ><p>Test3</p></div>
      </div>
    </div>
  );
}