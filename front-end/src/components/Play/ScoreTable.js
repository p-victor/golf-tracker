import React from "react";
import "./ScoreTable.css"

export default function ScoreTable(props) {
  const { number, par, yard, setHoleEdit, scoreNShot } = props; //can the difficulty be an avg of the hole?

  function holes() {
    let totalHoles = [];

    for (let i = 1; i < number.length + 2; i++) {
      if (i === 10 && number.length === 9) {
        totalHoles.push(<th key={100}>TOT</th>);             //keys, 100,101,102, are hard coded with random numbers 
      } else if (i === 10 && number.length === 18) {
        totalHoles.push(<th key={100}>OUT</th>);             //keys, 100,101,102, are hard coded with random numbers 
      } else if (i > 10 && i < 20) {                         //to identify the cell uniquely. The same for the rest, yard & par & score
        totalHoles.push(<th onClick={() => { setHoleEdit([i - 1, "d-block"]) }} key={i - 1}>{i - 1}</th>);
      } else {
        totalHoles.push(<th onClick={() => { setHoleEdit([i, "d-block"]) }} key={i}>{i}</th>);
      }
    }
    if (number.length > 9) {
      totalHoles.push(<th key={101}>IN</th>);
      totalHoles.push(<th key={102}>TOT</th>);
    }

    return totalHoles;
  };

  function pars() {
    let totalPars = [];
    let first9Total = 0;
    let second9Total = 0;
    for (let i = 0; i < number.length + 1; i++) {
      if (i === 9) {
        totalPars.push(<th key={200}>{first9Total}</th>);
      } else if (i > 9 && i < 19) {
        totalPars.push(<th key={i - 1}>{par[i - 1]}</th>);
        second9Total += par[i - 1];
      } else {
        totalPars.push(<th key={i}>{par[i]}</th>);
        first9Total += par[i];
      }
    }
    if (number.length > 9) {
      totalPars.push(<th key={201}>{second9Total}</th>);
      totalPars.push(<th key={202}>{first9Total + second9Total}</th>);
    }
    return totalPars;
  };

  function yards() {
    let totalYards = [];
    let first9Total = 0;
    let second9Total = 0;

    for (let i = 0; i < number.length + 1; i++) {
      if (i === 9) {
        totalYards.push(<th key={300}>{first9Total}</th>);
      } else if (i > 9 && i < 19) {
        totalYards.push(<th key={i - 1}>{yard[i - 1]}</th>);
        second9Total += yard[i - 1];
      } else {
        totalYards.push(<th key={i}>{yard[i]}</th>);
        first9Total += yard[i];
      }
    }
    if (number.length > 9) {
      totalYards.push(<th key={301}>{second9Total}</th>);
      totalYards.push(<th key={302}>{first9Total + second9Total}</th>);
    }
    return totalYards;
  };

  function scores() {
    let first9Scores = [];
    let second9Scores = [];
    let first9Total = 0;
    let second9Total = 0;

    for (let i = 0; i < number.length + 1; i++) {

      if (i === 9) {
        first9Scores.push(<th key={400}>{first9Total || 0}</th>);
      } else if (i > 9 && i < 19) {
        second9Scores.push(<th key={i - 1}>{scoreNShot[`hole${i}`] ? scoreNShot[`hole${i}`].length - 1 : null}</th>);
        if (scoreNShot[`hole${i}`]) { second9Total += scoreNShot[`hole${i}`].length - 1 };
      } else {
        first9Scores.push(<th key={i}>{scoreNShot[`hole${i + 1}`] ? scoreNShot[`hole${i + 1}`].length - 1 : null}</th>);
        if (scoreNShot[`hole${i + 1}`]) { first9Total += scoreNShot[`hole${i + 1}`].length - 1 };
      }
    }
    if (number.length > 9) {
      second9Scores.push(<th key={401}>{second9Total || 0}</th>);
      second9Scores.push(<th key={402}>{(first9Total + second9Total) || 0}</th>);
    }
    return [...first9Scores, ...second9Scores];
  };

  return (
    <section>
      <div class="table-responsive-md">
        <table className="table table-bordered score-table" style={{ color: "white" }}>
          <thead>
            <tr>
              <th>Hole</th>
              {holes()}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yard</td>
              {yards()}
            </tr>
            <tr>
              <td>Par</td>
              {pars()}
            </tr>
            <tr>
              <td>Score</td>
              {scores()}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};