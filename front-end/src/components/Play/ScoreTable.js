import React, { useState } from "react";

export default function PlayTable(props) {
  const { golf_course_id, number, par, yard, difficulty } = props;

  function holes() {
    let totalHoles = [];
    for (let i = 0; i < number.length; i++) {
      totalHoles.push(<th>{i + 1}</th>)
    }
    return totalHoles;
  };

  function pars() {
    let totalPars = [];
    for (let i = 0; i < number.length; i++) {
      totalPars.push(<th>{par[i]}</th>)
    }
    return totalPars;
  };

  function yards() {
    let totalYards = [];
    for (let i = 0; i < number.length; i++) {
      totalYards.push(<th>{yard[i]}</th>)
    }
    return totalYards;
  };

  return(
    <section>
        <table className="table table-striped table-bordered d-none d-lg-table-cell">
          <thead>
            <tr>
              <th>Hole</th>
              {holes()}
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