import React from "react";
import { useHistory } from 'react-router-dom';
import "./Results.css";

import GolfCourse from "../GolfCourse/GolfCourse";

export default function Results(props) {
  const { results, userId, email, setState } = props;
  let history = useHistory();

  const createNewGolfCourse = () => {
    setState(prev => ({ ...prev, currentTab: "" }));
    history.push('/create');
  }

  return (
    <>

      {
        !results.length ?
          <div className="create">
            <p>No match found...</p>
            <button onClick={createNewGolfCourse} style={{ width: "100%" }}>Create</button>
          </div>
          :
          results.map((golfcourse, index) => (<GolfCourse key={index} id={golfcourse.id} userId={userId} email={email} setState={setState} {...golfcourse} />))
      }
    </>
  );
}
