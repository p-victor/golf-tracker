import React from "react";

import useApp from "../../hooks/useApp";
import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";

export default function Search(props) {

  const { setKeyword, results } = useApp();

  return (
    <main>
      <SearchBar key="0" onSearch={keyword => setKeyword(keyword)} />
      <Results key="1" results={results} />
    </main>
  );
}
