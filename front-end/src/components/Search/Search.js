import React from "react";

import useApp from "../../hooks/useApp";
import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";

export default function Search(props) {

  const { setKeyword, results } = useApp();

  return (
    <main>
      <SearchBar onSearch={keyword => setKeyword(keyword)} />
      <Results results={results} />
    </main>
  );
}
