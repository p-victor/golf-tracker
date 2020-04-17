import { useState, useEffect } from "react";
import axios from "axios";


export default function useShot(props) {
  const [ state, setState ] = useState({ score:[], hole_score_id: [], club: [], comment: [] });

  function handleClub (e) {
    const selectedClub = e.target.value;
    state.club.push(selectedClub);
    setState(prev => ({ ...prev}));
  }
  function handleComment (e) {
    const selectedComment = e.target.value;
    state.comment.push(selectedComment);
    setState(prev => ({ ...prev}));
  }

  function save(score, hole_score_id, club, comment) {
    for (let i = 0; i < club.length - 1; i++) {
      if (score[i] === undefined) {
        axios.post(`/api/shot/`, {"hole_score_id": hole_score_id[i], "club": club[i], "comment": comment[i]})
        .then(data => console.log(data))
      } else {
        Promise.all([
          axios.post(`/api/shot/`, {"hole_score_id": hole_score_id[i], "club": club[i], "comment": comment[i]}),
          axios.post(`/api/hole/`, {"score": score[i]})
        ])
        .then(data => console.log(data))
      }
    }
   
  }


  return { state, setState, handleClub, handleComment, save }
}