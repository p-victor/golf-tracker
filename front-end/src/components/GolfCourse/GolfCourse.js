import React from "react";
import { Link, useHistory } from "react-router-dom";
import classNames from "classnames";
import "./GolfCourse.css";
import useGame from "../../hooks/useGame";

export default function GolfCourse(props) {
  const { createGame } = useGame();
  let { name, phone_number, website_url, postal_code, sponsor, id } = props;

  let history = useHistory();

  function playGame() {
    const teeTime = Date.now()
    createGame(id, 1, teeTime);  //1 is userId HARDCODED
    history.push('/play', {golfCourseId: id, teeTime});
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