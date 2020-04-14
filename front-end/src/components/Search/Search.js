import React from "react";

import useSearchBar from "../../hooks/useSearchBar";
import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";

export default function Search(props) {

  const [state, setState] = useSearchBar();

  return (
    <main>
      <SearchBar key="0" search={state.search} onSearch={search => setState(prev => ({...prev, search}))} />
      <Results key="1" results={state.results} />
    </main>
  );
}
