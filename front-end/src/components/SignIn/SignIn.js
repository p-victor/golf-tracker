import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./SignIn.css";

export default function SignIn(props) {

  const [state, setState] = useState({ email: "", password: "" })
  let history = useHistory();

  function setEmail(e) {
    const email = e.target.value;
    setState(prev => ({ ...prev, email }))
  };
  function setPassword(e) {
    const password = e.target.value;
    setState(prev => ({ ...prev, password }))
  };

  const login = () => {
    axios
      .post(`/api/signin`, state)
      .then(data => data.data[0]["id"])
      .then(userId => history.push('/', {email: state.email, userId}))
  }

  return (
    <section className="search-bar">
      <div className="title">Sign In</div>
      <form onSubmit={event => event.preventDefault()}>
        <input
          placeholder="email"
          name="email"
          type="text"
          value={state.email}
          onChange={setEmail}
          // onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
        />
        <input
          placeholder="password"
          name="password"
          type="password"
          value={state.password}
          onChange={setPassword}
        />
      </form>
      <button onClick={login}>Login</button>
    </section>
  );
}