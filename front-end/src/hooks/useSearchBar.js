import { useState, useEffect } from "react";
import axios from "axios";


export default function useSearchBar(props) {
  const [state, setState] = useState({ results: [], search: "" });
  
  useEffect(() => {
    axios
      .get(`/api/courses/${state.search}`)
      .then(res => setState(prev => ({...prev, results: res.data[0]})))
  }, [state.search])

  return [state, setState]
}