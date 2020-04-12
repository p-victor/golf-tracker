import React, { useState } from "react";
import { Link } from "react-router-dom";

import HoleInfo from "./HoleInfo";

export default function RegisterGolfHoleInfo(props) {
  const [ numberOfHoles, setNumberOfHoles ] = useState(18);

  const getNumberOfHoles = () => {
    let totalHoles = []; 
    for (let i = 0; i < numberOfHoles; i++) {
      totalHoles.push(<HoleInfo numberOfHoles={numberOfHoles} key={i} id={i + 1} />)
    }
    return totalHoles;
  };

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
            {getNumberOfHoles()}
          </tbody>
        </table>
      </section>
      <section>
        <button className="btn btn-primary stredtched-link" onClick={() => {}}>Register</button>
        <Link to="/" className="btn btn-primary stredtched-link">Cancel</Link>
      </section>
    </main>
  );
};