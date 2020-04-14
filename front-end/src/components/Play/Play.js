import React, { useState } from "react";
import { Link } from 'react-router-dom';

import ScoreTable from "./ScoreTable";

export default function Play(props) {
  const { handleClub, handleComment, score, state, onSave, onMove } = props
  const [error, setError] = useState("");

  let holeid = score[0] ? score.length + 1 : 1
  state.hole_score_id = holeid;

  function validate() {
    if (state.club === "") {
      setError("Club cannot be blank");
      return;
    }
    onSave(state.hole_score_id, state.club, state.comment);
  }

  return(
    <main>
      <ScoreTable key={1} score={score} number={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]} par={[3,4,5,3,5,4,4,3,4,5,4,4,5,3,4,3,4,4]} yard={[165,340,540,200,500,360,430,170,460,550,420,380,600,150,360,190,330,430]}/>
      <h3>Hole {holeid}</h3>
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
          <input
            name="comment"
            value={state.comment}
            onChange={handleComment}
            placeholder="Shot description"
            type="text"
          />
        </label>
      </form>
      <section className="club__validation">{error}</section>
      <div>
        <button className="btn btn-primary stredtched-link" onClick={validate}>Next Shot</button>
        <button className="btn btn-primary stredtched-link" onClick={onMove/*(score, weather_id, start_time, end_time, user_id, game_id, hole_id)*/}>Next Hole</button>
      </div>
      <Link to="/" className="btn btn-primary stredtched-link">Quit This Game</Link>
    </main>
  )
}