import React from "react";
import { Link } from 'react-router-dom';


export default function GolfCourse(props) {

  return (
    <div className={{golfCourse: true, card: true}} >
      <div className="card-body">
        <h1 className={{name: true, "card-title": true}}>{props.name}</h1>
        <p className={{postal_code: true, "card-text": true}}><a href={`https://google.com/maps/place/${props.postal_code}`}>{props.postal_code}</a></p>
        <p className={{phone_number: true, "card-text": true}}>{props.phone_number}</p>
        <a href={`${props.website_url}`} className="website_url">{props.website_url}</a>
        <p className={{no__results: true, "card-text": true}}>{props.results}</p>
        {props.sponsor ? <div className="sponsor">Sponsored</div> : <div></div>}
        {!props.results ? <Link to="/play" className="btn btn-primary stredtched-link" style={{width: "100%"}}>Play!</Link> 
        : <Link to="/create" className="btn btn-primary stredtched-link" style={{width: "100%"}}>Create</Link>}
      </div>
    </div>
  );
}
