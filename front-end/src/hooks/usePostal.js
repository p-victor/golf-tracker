import { useState, useEffect } from "react";
import axios from "axios";


export default function usePostal(props) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/newgolfcourse`)
      .then((data) => setPost(data.data[0]))
  }, [])

  return { post }
}