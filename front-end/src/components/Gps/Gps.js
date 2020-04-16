import React, { useState } from "react";
const weather = require('openweather-apis');
weather.setLang('en');


export default function Gps(props) {
  const [ weatherInfo, setWeatherInfo ] = useState({})

  weather.setAPPID("3d996283c23eab08f82473aac739fe26");
  let temp;

  navigator.geolocation.watchPosition(res => {
    weather.setCoordinate(res.coords.latitude, res.coords.longitude);
    weather.getAllWeather(function(err, JSONObj){setWeatherInfo(JSONObj)});
  })

  

    console.log(weatherInfo)




  return (
    <div className="MyLocation" >
      <p>{}</p>
    </div>
  );

}