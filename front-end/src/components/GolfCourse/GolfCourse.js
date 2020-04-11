import React from "react";

export default function GolfCourse(props) {

  return (
    <article className="golfCourse">
      <div className="name">{props.name}</div>
      <div className="postal__code"><a href={`https://google.com/maps/place/${props.postal_code}`}>{props.postal_code}</a></div>
      <div className="phone__number">{props.phone_number}</div>
      <div className="website">{props.website}</div>
      <div className="no__results">{props.results}</div>
      {props.sponsor ? <div className="sponsor">Sponsored</div> : <div></div>}
    </article>
  );
}
