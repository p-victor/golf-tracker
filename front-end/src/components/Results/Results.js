import React, {Fragment} from "react";
import { Link } from 'react-router-dom';

import GolfCourse from "../GolfCourse/GolfCourse";

export default function Results(props) {
  const { results } = props;

  if (!results.length) {
    return (
      <>
        <p>No match found...</p>
        <Link to="/create" className="btn btn-primary stretched-link" style={{ width: "100%" }}>Create</Link>
      </>
    )
  } else {
    return results.map(golfcourse => {
      return <GolfCourse key={golfcourse.id || 0} {...golfcourse} />;
    });
  }
}
