import React from "react";

import useSearchBar from "../../hooks/useSearchBar";
import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";
import "./Search.css";


export default function Search(props) {

  const [state, setState] = useSearchBar();

  return (
<<<<<<< HEAD
    <div className="search">
      <SearchBar className="search-bar" key="0" search={state.search} onSearch={search => setState(prev => ({...prev, search}))} />
      <Results key="1" results={state.results} />
    </div>
=======
    <main>
      <SearchBar search={state.search} onSearch={search => setState(prev => ({...prev, search}))} />
      <Results results={state.results} />
    </main>
>>>>>>> 920413630e195c91474d304a12eaebafbd1fd61a
  );
}
