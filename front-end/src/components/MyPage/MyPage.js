import React from "react";


export default function MyPage(props) {
  const { state, userId, email, currentTab, userGames, setState } = props;

  const displayHoles = () => {
    console.log(userGames)
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
      console.log('d', games[gameId])

      jsx.push(
        <>
          <h2>{games[gameId].name}</h2>
          <table>
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
                {console.log('dd',games[gameId])}
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
          </ table>
        </>)
    }
    return jsx;
  }

  return (
    <div>
      <ul>
        {displayHoles()}
      </ul>
    </div>
  );
}
