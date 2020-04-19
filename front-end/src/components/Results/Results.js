import React from "react";
import { useHistory } from 'react-router-dom';
import "./Results.css";

import GolfCourse from "../GolfCourse/GolfCourse";

export default function Results(props) {
  const { results, userId, isLoggedIn, email } = props;
  let history = useHistory();

  return (
    <>

      {
        !results.length ?
          <div className="create">
            <p>No match found...</p>
            <button onClick={() => history.push('/create', {userId, email} )} style={{ width: "100%" }}>Create</button>
          </div>
          :
          results.map((golfcourse, index) => (<GolfCourse key={index} id={golfcourse.id} userId={userId} isLoggedIn={isLoggedIn} email={email} {...golfcourse} />))
      }
    </>
  );
}
