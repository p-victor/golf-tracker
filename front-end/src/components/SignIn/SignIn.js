import React, { useState } from "react";
import axios from "axios";

import "./SignIn.css";

export default function SignIn(props) {
  const { userInfo, setApp, currentTab } = props;
  const [state, setState] = useState({ email: "", password: "" })

  function setEmail(e) {
    const email = e.target.value;
    setState(prev => ({ ...prev, email }));
  };
  function setPassword(e) {
    const password = e.target.value;
    setState(prev => ({ ...prev, password }));
  };

  const login = () => {
    axios
      .post(`/api/signin`, state)
      .then(data => {console.log(data.data)
        userInfo.user_id = data.data["user_id"];
        userInfo.email = data.data["email"];
        setApp(prev => ({...prev, currentTab: "search"}));
      });
  };

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