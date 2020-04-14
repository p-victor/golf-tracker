import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function RegisterGolfCourseInfo(props) {

  const [courseName, setCourseName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");


  function validate() {
    if (courseName === "") {
      setError("Course name cannot be blank");
      return;
    }
    if (postalCode === "") {
      setError("Postal Code cannot be blank");
      return;
    }
    if (props.postal.includes(postalCode)) {
      setError("The Postal Code you entered already exists");
      return;
    }
  }


  return (
    <main>
      <section>
        <form >
          <input
            name="course"
            value={courseName}
            onChange={e => setCourseName(e.target.value)}
            placeholder="Course Name"
            type="text"
          />
          <input
            name="postalCode"
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
            placeholder="Postal Code"
            type="text"
          />
          <input
            name="phoneNumber"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            type="text"
          />
          <input
            name="website"
            value={website}
            onChange={e => setWebsite(e.target.value)}
            placeholder="Website"
            type="text"
          />
        </form>
      </section>
      <section className="golf__info__validation">{error}</section>
      <section>

        <button
          className="btn btn-primary stretched-link"
          onClick={() => validate()}><Link key="0" to={{ pathname: "/holeinfo", state: { courseName, postalCode, phoneNumber, website }}}>Next</Link></button>
        <Link key="1" to="/" className="btn btn-primary stretched-link">Cancel</Link>
      </section>
    </main>
  );
}

