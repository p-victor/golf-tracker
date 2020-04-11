import React, {useState} from "react";

export default function HoleInfo(props) {
  const { id, numberOfHoles } = props;

  return (
    <main>
      <form onSubmit={event => event.preventDefault()}>
        <section>
          
        </section>
        <section>
          <button className="btn btn-primary stredtched-link" onClick={() => }>Register</button>
          <button className="btn btn-primary stredtched-link" onClick={() => }>Cancel</button>
        </section>
      </form>
    </main>
  );
};