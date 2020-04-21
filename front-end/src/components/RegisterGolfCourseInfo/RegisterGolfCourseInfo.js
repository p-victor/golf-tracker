import React, { useState } from "react";
import "./RegisterGolfCourseInfo.css";
import HoleInfo from "../RegisterGolfCourseInfo/HoleInfo";
import axios from "axios";

export default function RegisterGolfCourseInfo(props) {
  const { setTab, userId, email } = props
  const [state, setState] = useState({ courseName: "", postalCode: "", phoneNumber: "", website: "", error: "", holeCount: 18 })

  function validateCourse() {
    if (state.courseName === "") {
      setState(prev => ({ ...prev, error: "Course name cannot be blank" }));
      return false;
    }
    if (state.postalCode === "") {
      setState(prev => ({ ...prev, error: "Postal Code cannot be blank" }));
      return false;
    }
    if (props.postal.includes(state.postalCode)) {
      setState(prev => ({ ...prev, error: "The Postal Code you entered already exists" }));
      return false;
    }
    return true
  }

  function courseNm(e) {
    const courseName = e.target.value;
    setState(prev => ({ ...prev, courseName }))
  };

  function pCode(e) {
    const postalCode = e.target.value;
    setState(prev => ({ ...prev, postalCode }))
  };

  function pNumber(e) {
    const phoneNumber = e.target.value;
    setState(prev => ({ ...prev, phoneNumber }))
  };

  function wSite(e) {
    const website = e.target.value;
    setState(prev => ({ ...prev, website }))
  };

  const displayHoles = () => {
    let holes = [];
    for (let i = 0; i < state.holeCount; i++) {
      holes.push(<HoleInfo key={i} id={i + 1} />)
    }
    return holes;
  };

  const validateHoles = () => {
    let par = Array.from(document.querySelectorAll('.hole-par input'));
    let yard = Array.from(document.querySelectorAll('.hole-yard input'));
    let allHolesFilled = ![...par, ...yard].some(input => input.value === "");

    console.log(validateCourse())

    if (allHolesFilled && validateCourse()) {
      axios
        .post("/api/courses/new", { courseName: state.courseName, postalCode: state.postalCode, phoneNumber: state.phoneNumber, website: state.website, isSponsored: false })
        .then(data => {
          const courseId = data.data[0].id
          const holes = []
          for (let i = 0; i < state.holeCount; i++) {
            holes.push({ number: i + 1, par: par[i].value, yard: yard[i].value, golfCourseId: courseId })
          }
          axios
            .post(`/api/courses/${courseId}/holes/new`, holes)
            .then(() => {
              setTab(prev => ({...prev, currentTab: "search"}));
            })

        })
    } else {
      alert("Please fill all the blanks")
    }
  }

  const goBack = (() => {
    setTab(prev => ({ ...prev, currentTab: "search" }));
  })

  return (
    <>
      <section className="form-container">
        <form className="form">
          <div className="field">
            <div>name</div>
            <input
              name="course"
              value={state.courseName}
              onChange={courseNm}
              placeholder="Course Name"
              type="text"
            />
          </div>
          <div className="field">
            <div>postal code</div>
            <input
              name="postalCode"
              value={state.postalCode}
              onChange={pCode}
              placeholder="Postal Code"
              type="text"
            />
          </div>
          <div className="field">
            <div>phone number</div>
            <input
              name="phoneNumber"
              value={state.phoneNumber}
              onChange={pNumber}
              placeholder="Phone Number"
              type="text"
            />
          </div>
          <div className="field">
            <div>website </div>
            <input
              name="website"
              value={state.website}
              onChange={wSite}
              placeholder="Website"
              type="text"
            />
          </div>
        </form>
        <div >
          <div className="button-group">
            <button className={state.holeCount === 9 && "active"} onClick={() => setState(prev => ({ ...prev, holeCount: 9 }))}>9 Holes</button>
            <button className={state.holeCount === 18 && "active"} onClick={() => setState(prev => ({ ...prev, holeCount: 18 }))}>18 Holes</button>
          </div>
          <ul>
            {displayHoles()}
          </ul>
          <div className="button-group">
            <button onClick={() => validateHoles()}>Register</button>
            <button onClick={goBack}>Back</button>
          </div>
        </div>
      </section>
      <section>{state.error}</section>
    </>
  );
}