import { useState, useEffect } from "react";
import axios from "axios";


export default function usePostal(props) {
  const [postal, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/courses`)
      .then((data) => setPost(data.data[0]))
  }, [])

  return { postal }
}