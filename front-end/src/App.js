import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import RegisterGolfCourseInfo from './components/RegisterGolfCourseInfo/RegisterGolfCourseInfo';
import Play from './components/Play/Play';
import Gps from './components/Gps/Gps';
import MyPage from './components/MyPage/MyPage';
import usePostal from './hooks/usePostal';
import useGame from './hooks/useGame';
import useApp from './hooks/useApp';

function App() {
  const { state, setState } = useApp();

  // hole_scores: score, weather_id, start_time, end_time, user_id, game_id, hole_id
  // games: start_time, end_time, golf_course_id
  // weaters: temperature, sunny, rainy, foggy, wind_speed
  // users: first_name, last_name, email, password_hash
  // golf_courses: name, postal_code, wesite_url, phone_number

  const { postal } = usePostal();
  const { scoreNShot, setScoreNShot, handleClub, handleComment, save } = useGame();
  
  return (
    <>
      <main>
        <Router key={0}>
          <Switch>
            <Route exact path="/">
              <Search state={state} />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/play">
              <Play state={state.holes.length && state.holes[0]} handleClub={handleClub} handleComment={handleComment} scoreNShot={scoreNShot} setScoreNShot={setScoreNShot} onSave={save} /*USER ID*//>
            </Route>
            <Route exact path="/create" render={() => (
              <RegisterGolfCourseInfo postal={postal} />
            )} />
            <Route exact path="/gps">
              <Gps />
            </Route>
            <Route exact path="/mypage">
              <MyPage />
            </Route>
          </Switch>
        </Router>
      </main>
      <Navbar key={1} />
    </>
  );
};

export default App;
