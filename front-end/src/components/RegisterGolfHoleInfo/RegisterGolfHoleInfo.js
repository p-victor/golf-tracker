import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import HoleInfo from "./HoleInfo";

export default function RegisterGolfHoleInfo(props) {
  const [numberOfHoles, setNumberOfHoles] = useState(18);
  const location = useLocation();

  const displayHoles = () => {
    let totalHoles = [];
    for (let i = 0; i < numberOfHoles; i++) {
      totalHoles.push(<HoleInfo key={i} id={i + 1} />)
    }
    return totalHoles;
  };

  const validate = () => {
    let par = Array.from(document.querySelectorAll('.par input'));
    let yard = Array.from(document.querySelectorAll('.yard input'));
    let allInputsFilled = [...par, ...yard].some(input => input.value);

    if (allInputsFilled) {
      axios
        .post("/api/courses/new", { ...location.state, isSponsored: false })
        .then(data => {
          const courseId = data.data[0].id
          const holes = []
          for (let i = 0; i < numberOfHoles; i++) {
            holes.push({ number: i + 1, par: par[i].value, yard: yard[i].value, golfCourseId: courseId })
          }
          axios
            .post(`/api/courses/${courseId}/holes/new`, holes)
        })
    }
  }


  return (
    <main>
      <section>
        <button className="btn btn-primary stredtched-link" onClick={() => setNumberOfHoles(9)}>9 Holes</button>
        <button className="btn btn-primary stredtched-link" onClick={() => setNumberOfHoles(18)}>18 Holes</button>
      </section>
      <section>
        <table className="table table-striped table-bordered table-responsive">
          <thead>
            <tr>
              <th>#</th>
              <th>Par</th>
              <th>Yard</th>
            </tr>
          </thead>
          <tbody>
            {displayHoles()}
          </tbody>
        </table>
      </section>
      <section>
        <button className="btn btn-primary stredtched-link" onClick={() => validate()}>Register</button>
        <Link to="/" className="btn btn-primary stredtched-link">Cancel</Link>
      </section>
    </main>
  );
};