import React, { useState, useEffect, useCallback } from "react";

import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <section className="search">
      <form className="search__form" onSubmit={event => event.preventDefault()}>
        <input
          className="radius"
          spellCheck="false"
          placeholder="Please Enter Postal Code or Course Name"
          name="search"
          type="text"
          value={props.search}
          onChange={event => props.onSearch(event.target.value)}
        />
      </form>
    </section>
  );
}
