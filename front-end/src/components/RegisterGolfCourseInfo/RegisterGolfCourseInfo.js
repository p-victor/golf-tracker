import React, { useState } from "react";
import { Link, useHistory} from "react-router-dom";
import "./RegisterGolfCourseInfo.css";



export default function RegisterGolfCourseInfo(props) {

  const [state, setState] = useState({ courseName: "", postalCode: "", phoneNumber: "", website: "", error: "" })

  let history = useHistory();

  function validate() {
    if (state.courseName === "") {
      setState(prev => ({ ...prev, error: "Course name cannot be blank" }));
      return;
    }
    if (state.postalCode === "") {
      setState(prev => ({ ...prev, error: "Postal Code cannot be blank" }));
      return;
    }
    if (props.postal.includes(state.postalCode)) {
      setState(prev => ({ ...prev, error: "The Postal Code you entered already exists" }));
      return;
    }
  }

  return (
    <main>
      <section>
        <form className="form">
          <input
            name="course"
            value={state.courseName}
            onChange={e => setState(prev => ({ ...prev, courseName: e.target.value }))}
            placeholder="Course Name"
            type="text"
          />
          <input
            name="postalCode"
            value={state.postalCode}
            onChange={e => setState(prev => ({ ...prev, postalCode: e.target.value }))}
            placeholder="Postal Code"
            type="text"
          />
          <input
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={e => setState(prev => ({ ...prev, phoneNumber: e.target.value }))}
            placeholder="Phone Number"
            type="text"
          />
          <input
            name="website"
            value={state.website}
            onChange={e => setState(prev => ({ ...prev, website: e.target.value }))}
            placeholder="Website"
            type="text"
          />
        </form>
      </section>
      <section className="golf__info__validation">{state.error}</section>
      <section>
        <button onClick={() => validate()}><Link key="0" to={{ pathname: "/holeinfo", state: { ...state, isSponsored: false } }}>Next</Link></button>
        
        <button onClick={() => history.push('/')}>asd</button>
      </section>
    </main>
  );
}

