import React from "react";
const weather = require('openweather-apis');
weather.setLang('en');


export default function Gps(props) {
  weather.setCity('Montreal')



  return (
    <div className="MyLocation" >
<p>{    weather.getTemperature(function(err, temp){
        console.log(temp);
    })}</p>
    </div>
  );

}