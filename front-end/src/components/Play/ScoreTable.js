import React, { useState } from "react";

export default function PlayTable(props) {
  const { golf_course_id, number, par, yard, difficulty } = props;

  function fisrt9Holes() {
    let totalHoles = [];
    if (number.length === 9) {
      for (let i = 1; i < 9; i++) {
        totalHoles.push(<th>{i}</th>)
      }
      totalHoles.push(<th>TOT</th>)
    } else {
      for (let i = 1; i < 10; i++) {
        totalHoles.push(<th>{i}</th>)
      }
      totalHoles.push(<th>OUT</th>);
      for (let i = 10; i < 19; i++) {
        totalHoles.push(<th>{i}</th>)
      }
      totalHoles.push(<th>IN</th>);
      totalHoles.push(<th>TOT</th>);
    }
    return totalHoles;
  };

  function pars() {
    let totalPars = [];
    let first9Total = 0;
    let second9Total = 0;
    if (number.length === 9) {
      for (let i = 0; i < 9; i++) {
        totalPars.push(<th>{par[i]}</th>);
        first9Total += par[i];
      }
      totalPars.push(<th>TOT</th>)
    } else {
      for (let i = 0; i < 9; i++) {
        totalPars.push(<th>{par[i]}</th>);
        first9Total += par[i];
      }
      totalPars.push(<th>{first9Total}</th>);
      for (let i = 9; i < 18; i++) {
        totalPars.push(<th>{par[i]}</th>);
        second9Total += par[i];
      }
      totalPars.push(<th>{second9Total}</th>);
    totalPars.push(<th>{first9Total + second9Total}</th>);
    }
    return totalPars;
  };

  function yards() {
    let totalYards = [];
    let first9Total = 0;
    let second9Total = 0;
    if (number.length === 9) {
      for (let i = 0; i < 9; i++) {
        totalYards.push(<th>{yard[i]}</th>);
        first9Total += yard[i];
      }
      totalYards.push(<th>TOT</th>)
    } else {
      for (let i = 0; i < 9; i++) {
        totalYards.push(<th>{yard[i]}</th>);
        first9Total += yard[i];
      }
      totalYards.push(<th>{first9Total}</th>);
      for (let i = 9; i < 18; i++) {
        totalYards.push(<th>{yard[i]}</th>);
        second9Total += yard[i];
      }
      totalYards.push(<th>{second9Total}</th>);
      totalYards.push(<th>{first9Total + second9Total}</th>);
    }
    return totalYards;
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
              <td>Par</td>
              {pars()}
            </tr>
            <tr>
              <td>Yard</td>
              {yards()}
            </tr>
          </tbody>
        </table>
      </section>
);
}