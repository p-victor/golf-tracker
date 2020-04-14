import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Search from "./components/Search/Search";
import RegisterGolfCourseInfo from './components/RegisterGolfCourseInfo/RegisterGolfCourseInfo';
import RegisterGolfHoleInfo from './components/RegisterGolfHoleInfo/RegisterGolfHoleInfo';
import Play from './components/Play/Play';
import useApp from './hooks/useApp';
import usePostal from './hooks/usePostal';
import useShot from './hooks/useShot';

function App() {
  const { user, results, setKeyword } = useApp();
  const { postal } = usePostal();
  const { score, setScore, state, setState, handleClub, handleComment, save, move } = useShot();
  
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <header className="App-header">
              <Search results={results} setKeyword={setKeyword} />
            </header>
          </Route>
          <Route exact path="/play">
            <header className="Play-header">
              <Play key={1} handleClub={handleClub} handleComment={handleComment} score={score} state={state} onSave={save} onMove={move}/>
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
