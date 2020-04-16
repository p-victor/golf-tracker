import React from "react";
import { useHistory } from 'react-router-dom';
import "./Results.css";

import GolfCourse from "../GolfCourse/GolfCourse";

export default function Results(props) {
  const { results } = props;

  let history = useHistory();

  return (
    <div>
      {
        !results.length ?
          <>
            <p>No match found...</p>
            <button onClick={() => history.push('/create')} style={{ width: "100%" }}>Create</button>
          </>
          :
          results.map((golfcourse, index) => (<GolfCourse key={index} id={index} {...golfcourse} />))
      }
    </div>
  );
}
