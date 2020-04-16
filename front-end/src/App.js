import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import './App.css';

import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import RegisterGolfCourseInfo from './components/RegisterGolfCourseInfo/RegisterGolfCourseInfo';
import RegisterGolfHoleInfo from './components/RegisterGolfHoleInfo/RegisterGolfHoleInfo';
import Play from './components/Play/Play';
import usePostal from './hooks/usePostal';

function App() {
  const user = []
  const { postal } = usePostal();

  return (
    <>
      <Router key={0}>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/play">
            <Play user={user.id} />
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
