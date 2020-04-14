import React from "react";
import { useHistory } from 'react-router-dom';

export default function GolfCourse(props) {

  let history = useHistory()

  return (
    <div >
      <div className="card-body">
        <h1>{props.name}</h1>
        <a href={`https://google.com/maps/place/${props.postal_code}`}>{props.postal_code}</a>
        <p>{props.phone_number}</p>
        <a href={props.website_url}>{props.website_url}</a>
        <p>{props.results}</p>
        <div>Sponsored</div>
        <button className="btn btn-primary">Play</button>
      </div>
    </div>
  );
}
