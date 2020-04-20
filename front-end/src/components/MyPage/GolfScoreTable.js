import React from "react";

export default function GolfScoreTable(props) {

  return (
    <h2>game.name</h2>
    <table>
      <thead>
        <tr>
          <th>Hole</th>
          {games[gameId].map(holescore => `<th>${holescore.number}</th>`)}
        </tr>

      </thead>
      <tbody>
          <tr>
            <td>Yard</td>
            {games[gameId].map(holescore => `<th>${holescore.yard}</th>`)}
          </tr>
          <tr>
            <td>Par</td>
            {games[gameId].map(holescore => `<th>${holescore.par}</th>`)}
          </tr>
          <tr>
            <td>Score</td>
            {games[gameId].map(holescore => `<th>${holescore.score}</th>`)}
          </tr>
        </tbody>
    </ table>
  );
};