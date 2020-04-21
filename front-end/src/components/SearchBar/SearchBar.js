import React from "react";

import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <section className="search-bar">
      <div className="title">Score Caddie</div>
      <form onSubmit={event => event.preventDefault()}>
        <input
          className=""
          spellCheck="false"
          placeholder="Please Enter Postal Code or Course Name"
          name="search"
          type="text"
          value={props.search}
          onChange={event => props.onSearch(event.target.value)}
        />
      </form>
      <div className="dropshadow-top"></div>
    </section>
  );
}
