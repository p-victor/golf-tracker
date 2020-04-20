import React from "react";
import ScoreTable from "../Play/ScoreTable";

export default function MyPage(props) {

  const displayHoles = () => {
    console.log(props.userGames)

  }

  return (
    <div>
      <ul>
    {displayHoles()}
      </ul>
    </div>
  );
}
