import React, { useState } from "react";

export default function PlayTable(props) {
  const { golf_course_id, number, par, yard, difficulty, score } = props;

  function fisrt9Holes() {
    let totalHoles = [];
    if (number.length === 9) {
      for (let i = 1; i < 9; i++) {
        totalHoles.push(<th key={i}>{i}</th>)
      }
      totalHoles.push(<th key={10}>TOT</th>)
    } else {
      for (let i = 1; i < 10; i++) {
        totalHoles.push(<th key={i}>{i}</th>)
      }
      totalHoles.push(<th key={100}>OUT</th>);
      for (let i = 10; i < 19; i++) {
        totalHoles.push(<th key={i}>{i}</th>)
      }
      totalHoles.push(<th key={101}>IN</th>);
      totalHoles.push(<th key={102}>TOT</th>);
    }
    return totalHoles;
  };

  function pars() {
    let totalPars = [];
    let first9Total = 0;
    let second9Total = 0;
    if (number.length === 9) {
      for (let i = 0; i < 9; i++) {
        totalPars.push(<th key={i}>{par[i]}</th>);
        first9Total += par[i];
      }
      totalPars.push(<th key={20}>TOT</th>)
    } else {
      for (let i = 0; i < 9; i++) {
        totalPars.push(<th key={i}>{par[i]}</th>);
        first9Total += par[i];
      }
      totalPars.push(<th key={200}>{first9Total}</th>);
      for (let i = 9; i < 18; i++) {
        totalPars.push(<th key={i}>{par[i]}</th>);
        second9Total += par[i];
      }
      totalPars.push(<th key={201}>{second9Total}</th>);
    totalPars.push(<th key={202}>{first9Total + second9Total}</th>);
    }
    return totalPars;
  };

  function yards() {
    let totalYards = [];
    let first9Total = 0;
    let second9Total = 0;
    if (number.length === 9) {
      for (let i = 0; i < 9; i++) {
        totalYards.push(<th key={i}>{yard[i]}</th>);
        first9Total += yard[i];
      }
      totalYards.push(<th key={30}>TOT</th>)
    } else {
      for (let i = 0; i < 9; i++) {
        totalYards.push(<th key={i}>{yard[i]}</th>);
        first9Total += yard[i];
      }
      totalYards.push(<th key={300}>{first9Total}</th>);
      for (let i = 9; i < 18; i++) {
        totalYards.push(<th key={i}>{yard[i]}</th>);
        second9Total += yard[i];
      }
      totalYards.push(<th key={301}>{second9Total}</th>);
      totalYards.push(<th key={303}>{first9Total + second9Total}</th>);
    }
    return totalYards;
  };

  function scores() {
    let totalScores = [];
    let first9Total = 0;
    let second9Total = 0;
    if (number.length === 9) {
      for (let i = 0; i < 9; i++) {
        totalScores.push(<th key={i}>{score[i]}</th>);
        first9Total += score[i];
      }
      totalScores.push(<th key={40}>TOT</th>)
    } else {
      for (let i = 0; i < 9; i++) {
        totalScores.push(<th key={i}>{score[i]}</th>);
        first9Total += score[i];
      }
      totalScores.push(<th key={400}>{first9Total || 0}</th>);
      for (let i = 9; i < 18; i++) {
        totalScores.push(<th key={i}>{score[i]}</th>);
        second9Total += score[i];
      }
      totalScores.push(<th key={401}>{second9Total || 0}</th>);
      totalScores.push(<th key={402}>{(first9Total + second9Total) || 0}</th>);
    }
    return totalScores;
  };

  return(
    <section>
        <table className="table table-striped table-bordered d-none d-lg-table-cell">
          <thead>
            <tr>
              <th>Hole</th>
              {fisrt9Holes()}
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
      </section>
);
};