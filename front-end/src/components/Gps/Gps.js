import React from "react";
const weather = require('openweather-apis');
weather.setLang('en');


export default function Gps(props) {
  weather.setCity('Montreal')

  // apiid 3d996283c23eab08f82473aac739fe26

  weather.getTemperature(function(err, temp){
    console.log(temp);
  });


  return (
    <div className="MyLocation" >
<p>{    weather.getTemperature(function(err, temp){
        console.log(temp);
    })}</p>
    </div>
  );

}