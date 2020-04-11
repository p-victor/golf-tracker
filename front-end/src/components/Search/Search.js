import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";

export default function Search(props) {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/courses/${keyword}`)
      .then((data) => setResults(data.data[0]))
  }, [keyword])

  return (
    <main>
      <SearchBar onSearch={keyword => setKeyword(keyword)} />
      <Results results={results} />
    </main>
  );
}
