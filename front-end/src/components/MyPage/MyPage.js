import React from "react";
import { useHistory, useLocation } from 'react-router-dom';


export default function MyPage(props) {
  const location = useLocation();
  let history = useHistory();

  

  return (
    <div className={{golfCourse: true, card: true}} >
      <div className="card-body">
        <button onClick={() => history.push("/", {userId: location.state.userId, email: location.state.email})} />
      </div>
    </div>
  );
}
