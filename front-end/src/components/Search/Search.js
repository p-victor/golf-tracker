import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";

export default function Search(props) {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`${keyword} NEED TO ADD AN APPROPRIATE PATH`)
      .then((data) => setResults(data.data.results))
  }, [keyword])

  return (
    <Fragment>
      <header className="logo">
        <img src="images/brand.png" alt="Brand" />
      </header>
      <main>
        <SearchBar onSearch={keyword => setKeyword(keyword)} />
        <Results results={results} />
      </main>
    </Fragment>
  );
}
