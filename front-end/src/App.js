import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import RegisterGolfCourseInfo from './components/RegisterGolfCourseInfo/RegisterGolfCourseInfo';
import Play from './components/Play/Play';
import usePostal from './hooks/usePostal';
import useShot from './hooks/useShot';

function App() {
  const user = []
  const { postal } = usePostal();
  const { score, setScore, state, setState, handleClub, handleComment, save, move } = useShot();

  return (
    <>
      <main>
        <Router key={0}>
          <Switch>
            <Route exact path="/">
              <Search />
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
  );
};

export default App;
