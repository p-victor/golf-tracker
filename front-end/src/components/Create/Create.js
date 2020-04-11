import React, {useState} from "react";

export default function Create(props) {

  const [ courseName, setCourseName ] = useState("");
  const [ postalCode, setPostalCode ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const [ website, setWebsite ] = useState("");
  const [ error, setError ] = useState("");

  function validate() {
    if (courseName === "") {
      setError("Course name cannot be blank")
    }
    if (postalCode === "") {
      setError("Postal Code cannot be blank")
    }

  }
  

  return (
    <main>
      <form onSubmit={event => event.preventDefault()}>
        <section>
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
        </section>
        <section>
          <button className="btn btn-primary stredtched-link" onClick={() => validate()}>Create</button>
          <a href="/" className="btn btn-primary stredtched-link">Cancel</a>
        </section>
      </form>
    </main>
  );
}