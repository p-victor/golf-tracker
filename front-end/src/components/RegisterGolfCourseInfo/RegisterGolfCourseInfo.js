import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./RegisterGolfCourseInfo.css";

export default function RegisterGolfCourseInfo(props) {

  const [state, setState] = useState({ courseName: "", postalCode: "", phoneNumber: "", website: "", error: "" })
  let history = useHistory();

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
    history.push("/holeinfo", { ...state, isSponsored: false });
  }

  function courseNm(e) {
    const courseName = e.target.value;
    setState(prev => ({ ...prev, courseName}))
  };

  function pCode(e) {
    const postalCode = e.target.value;
    setState(prev => ({ ...prev, postalCode}))
  };

  function pNumber(e) {
    const phoneNumber = e.target.value;
    setState(prev => ({ ...prev, phoneNumber}))
  };

  function wSite(e) {
    const website = e.target.value;
    setState(prev => ({ ...prev, website}))
  };


  return (
    <main>
      <section>
        <form className="form">
          <input
            name="course"
            value={state.courseName}
            onChange={courseNm}
            placeholder="Course Name"
            type="text"
          />
          <input
            name="postalCode"
            value={state.postalCode}
            onChange={pCode}
            placeholder="Postal Code"
            type="text"
          />
          <input
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={pNumber}
            placeholder="Phone Number"
            type="text"
          />
          <input
            name="website"
            value={state.website}
            onChange={wSite}
            placeholder="Website"
            type="text"
          />
        </form>
      </section>
      <section>{state.error}</section>
      <section>
        <button onClick={validate}>Next</button>
        <button onClick={() => history.push('/')}>asd</button>
      </section>
    </main>
  );
}

