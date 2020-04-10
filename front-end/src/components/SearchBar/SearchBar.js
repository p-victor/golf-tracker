import React, { useState, useEffect, useCallback } from "react";

import "./SearchBar.css";

export default function SearchBar(props) {
  const [value, setValue] = useState("");

  const onSearch = useCallback(props.onSearch, [value]);

  useEffect(() => {
    onSearch(value);
  }, [value, onSearch]);

  return (
    <section className="search">
      <form className="search__form" onSubmit={event => event.preventDefault()}>
        <input
          className="radius"
          spellCheck="false"
          placeholder="Please Enter Postal Code or Course Name"
          name="search"
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </form>
    </section>
  );
}
