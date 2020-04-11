import { useState, useEffect } from "react";
import axios from "axios";


export default function useApp(props) {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/courses/${keyword}`)
      .then((data) => setResults(data.data[0]))
  }, [keyword])

  // useEffect(() => {
  //   axios
  //     .post(`/api/newcourse/`)
  //     .then((data) => setResults(data.data[0]))
  // }, [keyword])  

  return { setKeyword, results }
}