import React from "react";
import { useLocation } from 'react-router-dom';

import useSearchBar from "../../hooks/useSearchBar";
import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";
import "./Search.css";


export default function Search(props) {
  const { state } = props
  const [search, setSearch] = useSearchBar();
  const location = useLocation();

  function isLoggedIn() {
    if (location.state) {
      return location.state
    } else {
      return;
    }
  };

  return (
    <div className="search">
      <SearchBar className="search-bar" key="0" search={search.search} onSearch={search => setSearch(prev => ({...prev, search}))} />
      <Results key="1" results={search.results} state={state} userId={isLoggedIn() && isLoggedIn().userId} isLoggedIn={isLoggedIn} email={isLoggedIn() && isLoggedIn().email}/>
    </div>
  );
}
