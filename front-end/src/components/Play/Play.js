import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import ScoreTable from "./ScoreTable";

export default function Play(props) {
  const { handleClub, handleComment, state, onSave, setState } = props
  const [error, setError] = useState("");
  const [shot, setShot] = useState(1);
  const [starting, setStarting] = useState(true);

  let history = useHistory();

  function holeNumber() {

    if (state.score.length === 0 && starting) {
      return 1;
    } else if (state.score.length === 18 && starting) {
      return 18;
    } else if (starting) {
      return state.score.length + 1;
    };

    if (state.score.length === 0 && !starting) {
      return 10;
    } else if (state.score.length === 18 && !starting) {
      return 9
    } else if (!starting && state.score.length < 9) {
      return state.score.length + 10;
    } else if (!starting && state.score.length > 9) {
      return state.score.length - 8
    } else if (!starting && state.score.length === 9) {
      return 1
    }
  };

  function validateShot() {
    if (state.score.length === 18) {
      return alert("You've finished the game!");
    }
    if (!state.club[shot - 1]) {
      setError("Please select your club");
      return;
    }
    if (state.club[shot - 1]) {
      state.hole_score_id.push(holeNumber());
      setShot(prev => prev + 1);
      setError("");
    }
    document.getElementsByClassName("selectpicker")[0].value = "";
    document.getElementsByName("comment")[0].value = '';
  };

  function validateHole() {
    if (state.score.length === 18) {
      alert("You've finished the game!");
      onSave(state.score, state.hole_score_id, state.club, state.comment);
      history.push("/mypage");
    }

    if (!starting && state.score.length > 8 ) {
      let scoreArr = [...state.score];
      scoreArr.splice( holeNumber() - 1, 0, shot - 1);
      setState(prev => ({ ...prev, score: scoreArr}));
    } else if (!starting && state.score.length < 9) {
      state.score.push(shot - 1);
      setState(prev => ({...prev}));
    } else {
      state.score.push(shot - 1);
      setState(prev => ({...prev}));
    }
    setShot(1);
    setError("");

    document.getElementsByClassName("selectpicker")[0].value = "";
    document.getElementsByName("comment")[0].value = '';

    return;
  };

  function finishGameButton () {
    if (state.score.length === 18) {
      return "Finished!"
    } else {
      return "Hole Out"
    }
  };

  function quit() {
    if (window.confirm("Going back to the main page? Your progress will be lost")) {
      history.push("/");
    }
  };

  return(
    <main>
      <ScoreTable score={state.score} starting={starting} number={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]} par={[3,4,5,3,5,4,4,3,4,5,4,4,5,3,4,3,4,4]} yard={[165,340,540,200,500,360,430,170,460,550,420,380,600,150,360,190,330,430]}/>
      <div>
          <button className="btn btn-primary" onClick={() => setStarting(true)}>Hole 1</button>
          <button className="btn btn-primary" onClick={() => setStarting(false)}>Hole 10</button>
        </div>
      <h3>Hole {holeNumber()}</h3>
      <h5>Shot {shot}</h5>
      <form>
        <select className="selectpicker" onChange={handleClub}>
          <option data-hidden="true" value="">Club Selection</option>
          <option value="Driver">Driver</option>
          <option value="Wood 3">Wood 3</option>
          <option value="Wood 5">Wood 5</option>
          <option value="Wood 7">Wood 7</option>
          <option value="Iron 2">Iron 2</option>
          <option value="Iron 3">Iron 3</option>
          <option value="Iron 4">Iron 4</option>
          <option value="Iron 5">Iron 5</option>
          <option value="Iron 6">Iron 6</option>
          <option value="Iron 7">Iron 7</option>
          <option value="Iron 8">Iron 8</option>
          <option value="Iron 9">Iron 9</option>
          <option value="P">P</option>
          <option value="S">S</option>
          <option value="A">A</option>
          <option value="Putter">Putter</option>
        </select>
        <label>
          Comment:
        </label>        
          <input
            name="comment"
            onBlur={handleComment}
            placeholder="Shot description"
            type="text"
          />
      </form>
      <section className="club__validation">{error}</section>
      <div>
        <button className="btn btn-primary stredtched-link" onClick={validateShot}>Next Shot</button>
  <button className="btn btn-primary stredtched-link" onClick={validateHole}>{finishGameButton()}</button>
      </div>
      <button onClick={quit} className="btn btn-primary stredtched-link">Quit This Game</button>
    </main>
  )
}