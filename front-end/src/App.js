import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Search from "./components/Search/Search";
import RegisterGolfCourseInfo from './components/RegisterGolfCourseInfo/RegisterGolfCourseInfo';
import RegisterGolfHoleInfo from './components/RegisterGolfHoleInfo/RegisterGolfHoleInfo';
import Play from './components/Play/Play';
import useApp from './hooks/useApp';
import usePostal from './hooks/usePostal';

function App() {
  const { user, results, setKeyword } = useApp();
  const { post } = usePostal();
  
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <header className="App-header">
              <Search results={results} setKeyword={setKeyword} />
            </header>
          </Route>
          <Route path="/play">
            <header className="Play-header">
              <Play user={user.id}/>
            </header>
          </Route>
          <Route path="/create" render={() => (
            <header className="GolfCourse-header">
              <RegisterGolfCourseInfo post={post}/>
            </header>
          )}/>
          <Route path="/holeinfo">
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
