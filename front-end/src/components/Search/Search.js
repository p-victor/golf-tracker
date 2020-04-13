import React from "react";

import useSearch from "../../hooks/useSearch";
import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";
import useSearchBar from "../../hooks/useSearch";

export default function Search(props) {

  const [state, setState] = useSearch();

  return (
    <main>
      <SearchBar key="0" search={state.search} onSearch={search => setState(prev => ({...prev, search}))} />
      <Results key="1" results={state.results} />
    </main>
  );
}
