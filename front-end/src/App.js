<<<<<<< HEAD
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
=======
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> 920413630e195c91474d304a12eaebafbd1fd61a
import './App.css';

import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import RegisterGolfCourseInfo from './components/RegisterGolfCourseInfo/RegisterGolfCourseInfo';
import RegisterGolfHoleInfo from './components/RegisterGolfHoleInfo/RegisterGolfHoleInfo';
import Play from './components/Play/Play';
import usePostal from './hooks/usePostal';
<<<<<<< HEAD
=======
import useShot from './hooks/useShot';
>>>>>>> 920413630e195c91474d304a12eaebafbd1fd61a

function App() {
  const user = []
  const { postal } = usePostal();
<<<<<<< HEAD

=======
  const { score, setScore, state, setState, handleClub, handleComment, save, move } = useShot();
  
>>>>>>> 920413630e195c91474d304a12eaebafbd1fd61a
  return (
    <>
      <Router key={0}>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/play">
<<<<<<< HEAD
            <Play user={user.id} />
=======
            <header className="Play-header">
              <Play handleClub={handleClub} handleComment={handleComment} score={score} state={state} setState={setState} onSave={save} onMove={move}/>
            </header>
>>>>>>> 920413630e195c91474d304a12eaebafbd1fd61a
          </Route>
          <Route exact path="/create" render={() => (
            <RegisterGolfCourseInfo postal={postal} />
          )} />
          <Route exact path="/holeinfo">
            <RegisterGolfHoleInfo />
          </Route>
        </Switch>
      </Router>
      <Navbar key={1} />
    </>
  );
};

export default App;
