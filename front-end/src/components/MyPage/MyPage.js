import React from "react";
import { useHistory } from 'react-router-dom';


export default function MyPage(props) {
  const { userId, email, currentTab, setState } = props;
  let history = useHistory();

  const backHome = () => {
    setState(prev => ({ ...prev, currentTab: "search" }));
    history.push("/")
  }

  const displayHoles = () => {
    console.log(props.userGames)

  }

  return (
    <div>
      <ul>
        {displayHoles()}
      </ul>
      <button onClick={backHome} />
    </div>
  );
}
