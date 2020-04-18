import React, { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';

import ScoreTable from "./ScoreTable";
import Edit from "./Edit";

export default function Play(props) {
  const { handleClub, handleComment, onSave, scoreNShot, setScoreNShot, state } = props
  const [error, setError] = useState("");
  const [shot, setShot] = useState([1]);
  const [starting, setStarting] = useState([true, "d-block"]);
  const [holeEdit, setHoleEdit] = useState([1, "d-none"]);
  const location = useLocation();
  
  let history = useHistory();

  
  const par = [];
  const number = [];
  const yard = [];

  if (state.length) {

    state.map(ele => {
      if (ele.golf_course_id === location.state.golfCourseId) {         //without if, it crashes. 
        par.push(ele.par);
        number.push(ele.number);
        yard.push(ele.yard);
      }
    });
  }

  if (par.length === 9) {
    starting[1] = "d-none"
  }

  function holeNumber() {

    if (scoreNShot.score.length === 0 && starting[0]) {             //start on hole 1
      return 1;   
    } else if (scoreNShot.score.length === par.length && starting[0]) {     //finish a game, started on 1st hole
      return par.length;
    } else if (starting[0]) {
      return scoreNShot.score.length + 1;
    };

    if (scoreNShot.score.length === 0 && !starting[0]) {          //start on 10th hole
      return 10;
    } else if (scoreNShot.score.length === 18 && !starting[0]) {  //finish a game, started on 10th hole
      return 9                                            //so 9th hole is the last one
    } else if (!starting[0] && scoreNShot.score.length < 9) {
      return scoreNShot.score.length + 10;                     //start on 10th, playing on 11th => score.length = 1, hole number = 11
    } else if (!starting[0] && scoreNShot.score.length > 9) {
      return scoreNShot.score.length - 8
    } else if (!starting[0] && scoreNShot.score.length === 9) {
      return 1
    }
  };

  function StartAt1() {
    setStarting([true, "d-block"]);
    scoreNShot[`hole1`] = [[]];
    delete scoreNShot[`hole10`];
  }
  function StartAt10() {
    setStarting([false, "d-block"]);
    scoreNShot[`hole10`] = [[]];
    delete scoreNShot[`hole1`];
  }

  function validateShot() {
    if (scoreNShot.score.length === par.length) {
      return alert("You've finished the game!");
    }
    if (!scoreNShot[`hole${holeNumber()}`][shot[0] - 1][0]) {    //  scoreNShot = { score:[], hole1, hole2, ..., hole18:[[driver, good],[wood, perfect],...,[putter, wonderful]]
      setError("Please select your club");
      return;
    }
    scoreNShot[`hole${holeNumber()}`].push([]);               // create an array of an array for the next hole.
                                                                            
    if (scoreNShot[`hole${holeNumber()}`][shot[0] - 1][0]) {    
      setShot(prev => [prev[0] + 1]);                                  
      setError("");
    }
    document.getElementsByClassName("selectpicker")[0].value = "";  //reset club selector
    document.getElementsByName("comment")[0].value = '';            //reset shot comment
  };

  function validateHole() {
    if (scoreNShot.score.length === par.length) {
      alert("You've finished the game!");
      onSave(scoreNShot, location.state.golfCourseId, Date.now());
      history.push("/mypage");
      return;
    }
    starting[1] = "d-none"
    setStarting(prev => [...prev]);

    scoreNShot[`hole${holeNumber() + 1}`] = [[]];

    if (!starting[0] && scoreNShot.score.length > 8 ) {
      let scoreArr = [...scoreNShot.score];
      scoreArr.splice( holeNumber() - 1, 0, shot[0] - 1);      //10th hole start, when playing 1st hole, the score of the 1st hole will be prepended.
      scoreNShot.score = scoreArr;
      setScoreNShot(prev => ({ ...prev}));
    } else if (!starting[0] && scoreNShot.score.length < 8) {
      scoreNShot.score.push(shot[0] - 1);
      setScoreNShot(prev => ({...prev}));
    } else if  (!starting[0] && scoreNShot.score.length === 8) {
      scoreNShot.score.push(shot[0] - 1);
      setScoreNShot(prev => ({...prev}));
      scoreNShot[`hole1`] = [[]];
    } else {
      scoreNShot.score.push(shot[0] - 1);
      setScoreNShot(prev => ({...prev}));
    }
    setShot([1]);
    setError("");

    return;
  };

  function finishGameButton () {
    if (scoreNShot.score.length === par.length) {
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
        <ScoreTable setHoleEdit={setHoleEdit} setScoreNShot={setScoreNShot} score={scoreNShot.score} scoreNShot={scoreNShot} starting={starting[0]} number={number} par={par} yard={yard}/>
        <div className={starting[1]}>
            <button className={"btn btn-primary"} onClick={StartAt1}>Hole 1</button>
            <button className="btn btn-primary" onClick={StartAt10}>Hole 10</button>
          </div>
        <h3 style={{color:"white"}}>Hole {holeNumber()}</h3>
        <h5 style={{color:"white"}}>Shot {shot[0]}</h5>
        <form>
          <select className="selectpicker" onChange={e => handleClub(e, holeNumber(), shot[0])} defaultValue="">
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
          <label style={{color:"white"}}>
            Comment:
          </label>        
            <input
              name="comment"
              defaultValue=""
              onBlur={e => handleComment(e, holeNumber(), shot[0])}
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
        <div className={holeEdit[1]} style={{color:"white"}}>
          <Edit holeEdit={holeEdit} scoreNShot={scoreNShot} error={error} setScoreNShot={setScoreNShot} setShot={shot} holeNumber={holeNumber()}/>
        </div>
      </main>
    </>
  )
}