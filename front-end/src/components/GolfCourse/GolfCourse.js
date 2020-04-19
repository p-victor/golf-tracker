import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import "./GolfCourse.css";

export default function GolfCourse(props) {
  let { name, phone_number, website_url, postal_code, sponsor, id, userId } = props;

  let history = useHistory();

  function playGame() {
    axios.post(`/api/newgame/`, { start_time: Date.now(), golf_course_id: id, user_id: 1 })
    .then(data => {
      let gameId = data.data[0]["id"];
      return gameId
    }).then(gameId => history.push('/play', {golfCourseId: id, gameId: gameId, userId}))
  }

  return (
    <div className="golf-course">
      <div className="course-info">
        <div className="name">{sponsor && <div className="badge badge-warning">sponsor</div>} {name}</div>
        <div>postal code: <a href={`https://google.com/maps/place/${postal_code}`}>{postal_code}</a></div>
        <div>phone: <a href={phone_number}>{phone_number}</a></div>
        <div>website:  <a href={website_url}>{website_url}</a></div>
      </div>
      <button className="button" onClick={playGame} >Play</button>
    </div>
  );
}