import React from "react";

import useSearchBar from "../../hooks/useSearchBar";
import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";
import "./Search.css";


export default function Search(props) {
  const { state, setState } = props
  const [search, setSearch] = useSearchBar();

  return (
    <div className="search">
      <SearchBar className="search-bar" key="0" search={search.search} onSearch={search => setSearch(prev => ({...prev, search}))} />
      <Results key="1" results={search.results} state={state} userId={state.userInfo.user_id} email={state.userInfo.email} setState={setState}/>
    </div>
  );
}
