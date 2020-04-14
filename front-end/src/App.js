import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Search from "./components/Search/Search";
import RegisterGolfCourseInfo from './components/RegisterGolfCourseInfo/RegisterGolfCourseInfo';
import RegisterGolfHoleInfo from './components/RegisterGolfHoleInfo/RegisterGolfHoleInfo';
import Play from './components/Play/Play';
import usePostal from './hooks/usePostal';
import Axios from 'axios';

function App() {
  const user = []
  const { postal } = usePostal();
  
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
              <Play user={user.id}/>
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
        </Switch>
      </div>
    </Router>
  );
};

export default App;
