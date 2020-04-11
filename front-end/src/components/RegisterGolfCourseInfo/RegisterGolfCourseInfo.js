import React, {useState} from "react";
import { Link } from "react-router-dom";


export default function RegisterGolfCourseInfo(props) {

  const [ courseName, setCourseName ] = useState("");
  const [ postalCode, setPostalCode ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const [ website, setWebsite ] = useState("");
  const [ error, setError ] = useState("");

  function validate() {
    if (courseName === "") {
      setError("Course name cannot be blank");
      return;
    }
    if (postalCode === "") {
      setError("Postal Code cannot be blank");
      return;
    }
    console.log(props.post)
    for (let i = 0; i < props.post.length; i++) {
      if (postalCode === props.post[i]["postal_code"]) {
        setError("The Postal Code you enter already exists");
        return;
      }
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
          className="btn btn-primary stredtched-link" 
          onClick={() => validate()}><Link to={{pathname:"/holeinfo", aboutProps: {courseName, postalCode, phoneNumber, website}}}>Next</Link></button>
        <Link to="/" className="btn btn-primary stredtched-link">Cancel</Link>
      </section>
    </main>
  );
}

