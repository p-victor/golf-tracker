import { useState, useEffect } from "react";
import axios from "axios";


export default function useShot(props) {
  const [ score, setScore ] = useState([]);
  const [ state, setState ] = useState({ hole_score_id: "", club: "", comment: "" });

  function handleClub (e) {
    const club = e.target.value;
    setState(prev => ({ ...prev, club}))
  }
  function handleComment (e) {
    const comment = e.target.value;
    setState(prev => ({ ...prev, comment}))
  }

  function save(hole_score_id, club, comment) {
    return axios.post(`/api/shot/`, {hole_score_id, club, comment})
      .then(data => console.log(data))
   
  }

  return { score, setScore, state, setState, handleClub, handleComment, save }
}