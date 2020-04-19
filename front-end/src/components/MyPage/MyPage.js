import React from "react";
import { useHistory } from 'react-router-dom';


export default function MyPage(props) {
  const { userId, email } = props;
  let history = useHistory();

  

  return (
    <div className={{golfCourse: true, card: true}} >
      <div className="card-body">
        <button onClick={() => history.push("/")} />
      </div>
    </div>
  );
}
