import React, { useState } from "react";

import HoleInfo from "./HoleInfo";

export default function RegisterGolfHoleInfo(props) {
  const [ numberOfHoles, setNumberOfHoles ] = useState(0);

  const getNumberOfHoles = () => {
    let totalHoles = []; 
    for (let i = 0; i < numberOfHoles; i++) {
      totalHoles.push(<tr><HoleInfo numberOfHoles={numberOfHoles} key={i} id={i + 1} /></tr>)
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
        {getNumberOfHoles()}
      </section>
    </main>
  );
};