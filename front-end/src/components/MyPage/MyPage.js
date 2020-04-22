import React from "react";
import "./MyPage.css"


export default function MyPage(props) {
  const { state, userId, email, currentTab, userGames, setState } = props;

  const displayHoles = () => {
    let games = {}
    userGames.forEach(score => {
      if (!games[score.game_id]) {
        games[score.game_id] = []
      }
      games[score.game_id].push({
        number: score.number,
        start_time: score.start_time,
        end_time: score.end_time,
        par: score.par,
        number: score.number,
        yard: score.yard,
        name: score.name,
        score: score.score,
      });
    });

    let jsx = []

    for (let gameId in games) {
      console.log(games[gameId])
      jsx.push(
        <div className="game">
          <h4>{games[gameId][0].name}</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Hole</th>
                {games[gameId].map(holescore => <th>{holescore.number}</th>)}
                <th>TOT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Yard</td>
                {games[gameId].map(holescore => <td>{holescore.yard}</td>)}
                <th>{games[gameId].reduce((prev, holescore) => (prev + holescore.yard), 0)}</th>
              </tr>
              <tr>
                <td>Par</td>
                {games[gameId].map(holescore => <td>{holescore.par}</td>)}
                <th>{games[gameId].reduce((prev, holescore) => (prev + holescore.par), 0)}</th>
              </tr>
              <tr>
                <td>Score</td>
                {games[gameId].map(holescore => <td>{holescore.score}</td>)}
                <th>{games[gameId].reduce((prev, holescore) => (prev + holescore.score), 0)}</th>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
    return jsx;
  }

  return (
    <div>
      <div className="title">Score Caddie</div>
      <ul className="game-container">
        {displayHoles()}
      </ul>
    </div>
  );
}
