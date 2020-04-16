import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Search from "./components/Search/Search";
import RegisterGolfCourseInfo from './components/RegisterGolfCourseInfo/RegisterGolfCourseInfo';
import RegisterGolfHoleInfo from './components/RegisterGolfHoleInfo/RegisterGolfHoleInfo';
import Play from './components/Play/Play';
import Gps from './components/Gps/Gps';
import usePostal from './hooks/usePostal';
import useShot from './hooks/useShot';
// import useApp from './hooks/useApp';

function App() {
  // const { NEED USESR INFO, GOLF COURSE INFO, GAME INFO, HOLE SCORE INFO HERE} = useApp();

  // hole_scores: score, weather_id, start_time, end_time, user_id, game_id, hole_id
  // games: start_time, end_time, golf_course_id
  // weaters: temperature, sunny, rainy, foggy, wind_speed
  // users: first_name, last_name, email, password_hash
  // golf_courses: name, postal_code, wesite_url, phone_number

  const { postal } = usePostal();
  const { score, setScore, state, setState, handleClub, handleComment, save, move } = useShot();
  
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <header className="App-header">
              <Search />
            </header>
          </Route>
          <Route exact path="/play">
            <header className="Play-header">
              <Play handleClub={handleClub} handleComment={handleComment} score={score} state={state} setState={setState} onSave={save} onMove={move} setScore={setScore} />
            </header>
          </Route>
          <Route exact path="/create" render={() => (
            <header className="GolfCourse-header">
              <RegisterGolfCourseInfo postal={postal}/>
            </header>
          )}/>
          <Route exact path="/holeinfo">
            <header className="HoleInfo-header">
              <RegisterGolfHoleInfo />
            </header>
          </Route>
          <Route exact path="/gps">
            <header >
              <Gps />
            </header>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
