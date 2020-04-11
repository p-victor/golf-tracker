import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Search from "./components/Search/Search";
import RegisterGolfCourseInfo from './components/RegisterGolfCourseInfo/RegisterGolfCourseInfo';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <header className="App-header">
              <Search />
            </header>
          </Route>
            
          <Route path="/create">
            <header className="GolfCourse-header">
              <RegisterGolfCourseInfo />
            </header>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
