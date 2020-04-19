import { useState } from "react";
import axios from "axios";


export default function useGame(props) {
  const [ scoreNShot, setScoreNShot ] = useState({ score:[], hole1:[[]], gameId: []});

  function handleClub (e, hole, shot) {
    const  club = e.target.value;
    scoreNShot[`hole${hole}`][shot - 1][0] = club;
    setScoreNShot(prev => ({ ...prev}));
  };

  function handleComment (e, hole, shot) {
    const comment = e.target.value;
    scoreNShot[`hole${hole}`][shot - 1][1] = comment;
    setScoreNShot(prev => ({ ...prev}));
  };

  function save(scoreNShot, userId, endTime, gameId, courseId) {

    // for (let i = 0; i < 18; i++) {
    //   axios.post(`/api/hole/`, { score: scoreNShot.score[i], user_id: userId })
    //   .then(data => console.log(data));
    // }



    for (let j = 1; j < scoreNShot.score.length; j++) {
      for (let k = 0; k < 14; k++) {
        if (scoreNShot[`hole${j}`][k] !== undefined && scoreNShot[`hole${j}`][k][0] !== undefined) {
          axios.post(`/api/shot/`, {
            hole_score_id: j,         
            club: scoreNShot[`hole${j}`][k][0], 
            comment: scoreNShot[`hole${j}`][k][1]
          })
        }
      }
    }

    return axios.put(`/api/game/${gameId}`, { end_time: endTime, id: gameId })
    .then(data => console.log(data));

  };



  return { scoreNShot, setScoreNShot, handleClub, handleComment, save };
}