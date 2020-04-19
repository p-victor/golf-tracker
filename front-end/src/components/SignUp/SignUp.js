import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./SignUp.css";

export default function SignUp(props) {

  const [state, setState] = useState({ email: "", password: "" })
  let history = useHistory();

  function setFirstName(e) {
    const first_name = e.target.value;
    setState(prev => ({ ...prev, first_name }))
  };
  function setLastName(e) {
    const last_name = e.target.value;
    setState(prev => ({ ...prev, last_name }))
  };
  function setEmail(e) {
    const email = e.target.value;
    setState(prev => ({ ...prev, email }))
  };
  function setPassword(e) {
    const password = e.target.value;
    setState(prev => ({ ...prev, password }))
  };

  const register = () => {
    axios
      .post(`/api/signup`, state)
      .then(data => data.data[0]["id"])
      .then(userId => history.push('/', {email: state.email, userId}))
  }

  return (
    <section className="search-bar">
      <div className="title">Sign Up</div>
      <form onSubmit={event => event.preventDefault()}>
        <input
          placeholder="first name"
          name="first_name"
          type="text"
          value={state.first_name}
          onChange={setFirstName}
        />
        <input
          placeholder="last name"
          name="last_name"
          type="text"
          value={state.last_name}
          onChange={setLastName}
        />
        <input
          placeholder="email"
          name="email"
          type="text"
          value={state.email}
          onChange={setEmail}
        />
        <input
          placeholder="password"
          name="password"
          type="password"
          value={state.password}
          onChange={setPassword}
        />
      </form>
      <button onClick={register}>Register</button>
    </section>
  );
}