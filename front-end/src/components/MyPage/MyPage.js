import React from "react";
import { useHistory } from 'react-router-dom';


export default function MyPage(props) {
  const { userId, email, currentTab, setState } = props;
  let history = useHistory();

  const backHome = () => {
    setState(prev => ({...prev, currentTab: "search"}));
    history.push("/")
  }

  return (
    <div className={{golfCourse: true, card: true}} >
      <div className="card-body">
        <button onClick={backHome} />
      </div>
    </div>
  );
}
