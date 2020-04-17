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
<<<<<<< HEAD
  const { score, setScore, state, setState, handleClub, handleComment, save, move } = useShot();

=======
  const { state, setState, handleClub, handleComment, save } = useShot();
  
>>>>>>> f70af4ad3bff42b3abb9c22b0927ca19b5fdf571
  return (
    <>
      <main>
        <Router key={0}>
          <Switch>
            <Route exact path="/">
              <Search />
<<<<<<< HEAD
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/play">
              <Play handleClub={handleClub} handleComment={handleComment} score={score} state={state} setState={setState} onSave={save} onMove={move} />
            </Route>
            <Route exact path="/create" render={() => (
              <RegisterGolfCourseInfo postal={postal} />
            )} />
            <Route exact path="/holeinfo">
            </Route>
          </Switch>
        </Router>
      </main>
      <Navbar key={1} />
    </>
=======
            </header>
          </Route>
          <Route exact path="/play">
            <header className="Play-header">
              <Play handleClub={handleClub} handleComment={handleComment} state={state} setState={setState} onSave={save} />
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
          <Route exact path="/mypage">
            <header >
              <MyPage />
            </header>
          </Route>
        </Switch>
      </div>
    </Router>
>>>>>>> f70af4ad3bff42b3abb9c22b0927ca19b5fdf571
  );
};

export default App;
