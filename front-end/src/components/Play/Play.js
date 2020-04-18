import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import ScoreTable from "./ScoreTable";
import Edit from "./Edit";

export default function Play(props) {
  const { handleClub, handleComment, onSave, scoreNShot, setScoreNShot } = props
  const [error, setError] = useState("");
  const [shot, setShot] = useState(1);
  const [starting, setStarting] = useState(true);
  const [holeEdit, setHoleEdit] = useState([1, "d-none"]);

  let history = useHistory();

  function holeNumber() {

    if (scoreNShot.score.length === 0 && starting) {             //start on hole 1
      return 1;   
    } else if (scoreNShot.score.length === 18 && starting) {     //finish a game, started on 1st hole
      return 18;
    } else if (starting) {
      return scoreNShot.score.length + 1;
    };

    if (scoreNShot.score.length === 0 && !starting) {          //start on 10th hole
      return 10;
    } else if (scoreNShot.score.length === 18 && !starting) {  //finish a game, started on 10th hole
      return 9                                            //so 9th hole is the last one
    } else if (!starting && scoreNShot.score.length < 9) {
      return scoreNShot.score.length + 10;                     //start on 10th, playing on 11th => score.length = 1, hole number = 11
    } else if (!starting && scoreNShot.score.length > 9) {
      return scoreNShot.score.length - 8
    } else if (!starting && scoreNShot.score.length === 9) {
      return 1
    }
  };

  function validateShot() {
    if (scoreNShot.score.length === 18) {
      return alert("You've finished the game!");
    }
    if (!scoreNShot[`hole${holeNumber()}`][shot - 1][0]) {    //  scoreNShot = { score:[], hole1, hole2, ..., hole18:[[driver, good],[wood, perfect],...,[putter, wonderful]]
      setError("Please select your club");
      return;
    }
    scoreNShot[`hole${holeNumber()}`].push([]);               // create an array of an array for the next hole.
                                                                            
    if (scoreNShot[`hole${holeNumber()}`][shot - 1][0]) {    
      setShot(prev => prev + 1);                                  
      setError("");
    }
    document.getElementsByClassName("selectpicker")[0].value = "";  //reset club selector
    document.getElementsByName("comment")[0].value = '';            //reset shot comment
  };

  function validateHole() {
    if (scoreNShot.score.length === 18) {
      alert("You've finished the game!");
      onSave(scoreNShot);
      history.push("/mypage");
      return;
    }
    scoreNShot[`hole${holeNumber() + 1}`] = [[]];

    if (!starting && scoreNShot.score.length > 8 ) {
      let scoreArr = [...scoreNShot.score];
      scoreArr.splice( holeNumber() - 1, 0, shot - 1);      //10th hole start, when playing 1st hole, the score of the 1st hole will be prepended.
      setScoreNShot(prev => ({ ...prev, score: scoreArr}));
    } else if (!starting && scoreNShot.score.length < 9) {
      scoreNShot.score.push(shot - 1);
      setScoreNShot(prev => ({...prev}));
    } else {
      scoreNShot.score.push(shot - 1);
      setScoreNShot(prev => ({...prev}));
    }
    setShot(1);
    setError("");

    return;
  };

  function finishGameButton () {
    if (scoreNShot.score.length === 18) {
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
    <>
      <main>
        <ScoreTable setHoleEdit={setHoleEdit} setScoreNShot={setScoreNShot} score={scoreNShot.score} starting={starting} number={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]} par={[3,4,5,3,5,4,4,3,4,5,4,4,5,3,4,3,4,4]} yard={[165,340,540,200,500,360,430,170,460,550,420,380,600,150,360,190,330,430]}/>
        <div>
            <button className="btn btn-primary" onClick={() => setStarting(true)}>Hole 1</button>
            <button className="btn btn-primary" onClick={() => setStarting(false)}>Hole 10</button>
          </div>
        <h3>Hole {holeNumber()}</h3>
        <h5>Shot {shot}</h5>
        <form>
          <select className="selectpicker" onChange={e => handleClub(e, holeNumber(), shot)} defaultValue="">
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
              defaultValue=""
              onBlur={e => handleComment(e, holeNumber(), shot)}
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
      <footer className={holeEdit[1]}>
        <Edit holeEdit={holeEdit} scoreNShot={scoreNShot} handleClub={handleClub} handleComment={handleComment} error={error} setScoreNShot={setScoreNShot} />
      </footer>
    </>
  )
}