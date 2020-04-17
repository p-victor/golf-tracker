import { useState, useEffect } from "react";
import axios from "axios";


export default function useShot(props) {
  const [ state, setState ] = useState({ score:[], hole1:[[]]});

  function handleClub (e, hole, shot) {
    const  club = e.target.value;
    state[`hole${hole}`][shot - 1][0] = club;
    setState(prev => ({ ...prev}));
  }
  function handleComment (e, hole, shot) {
    const comment = e.target.value;
    state[`hole${hole}`][shot - 1][1] = comment;
    setState(prev => ({ ...prev}));
  }

  function save(state) {

    // for (let i = 0; i < 18; i++) {
    //   axios.post(`/api/hole/`, { score: state.score[i] })
    //   .then(data => console.log(data));
    // }

    for (let j = 1; j < state.score.length; j++) {
      for (let k = 0; k < 14; k++) {
        if (state[`hole${j}`][k] !== undefined && state[`hole${j}`][k][0] !== undefined) {
          axios.post(`/api/shot/`, {
            hole_score_id: j,         
            club: state[`hole${j}`][k][0], 
            comment: state[`hole${j}`][k][1]
          })
        }
      }
    }
  }


  return { state, setState, handleClub, handleComment, save }
}