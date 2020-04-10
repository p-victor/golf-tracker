import React from "react";

import GolfCourse from "../GolfCourse/GolfCourse";

export default function Results(props) {
  const { results } = props;

  return results.map(golfcourse => {
    return <GolfCourse key={golfcourse.id} {...golfcourse} />;
  });
}
