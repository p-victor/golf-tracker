import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import RegisterGolfCourseInfo from './components/RegisterGolfCourseInfo/RegisterGolfCourseInfo';
import Play from './components/Play/Play';
import MyPage from './components/MyPage/MyPage';
import usePostal from './hooks/usePostal';
import useGame from './hooks/useGame';
import useApp from './hooks/useApp';

function App() {
  const { state, setState } = useApp();
  const { postal } = usePostal();
  const { scoreNShot, setScoreNShot, handleClub, handleComment, save, deleteGame } = useGame();

  return (
    <>
      <main>
        <Router key={0}>
          <Switch>
            <Route exact path="/">
              <Search state={state} setState={setState}/>
            </Route>
            <Route exact path="/signup">
              <SignUp userInfo={state.userInfo} setApp={setState} currentTab={state.currentTab} />
            </Route>
            <Route exact path="/signin">
              <SignIn userInfo={state.userInfo} setApp={setState} currentTab={state.currentTab} />
            </Route>
            <Route exact path="/play">
              <Play state={state.holes.length && state.holes[0]} 
                    handleClub={handleClub} 
                    handleComment={handleComment} 
                    scoreNShot={scoreNShot} 
                    setScoreNShot={setScoreNShot} 
                    onSave={save}
                    deleteGame={deleteGame}
                    userId={state.userInfo.user_id}
                    email={state.userInfo.email}
                    setState={setState} 
              />
            </Route>
            <Route exact path="/create" render={() => (
              <RegisterGolfCourseInfo postal={postal} userId={state.userInfo.user_id} email={state.userInfo.email} setTab={setState}/>
            )} />
            <Route exact path="/mypage">
              <MyPage userGames={state.userGames} userId={state.userInfo.user_id} email={state.userInfo.email} currentTab={state.currentTab} setState={setState} />
            </Route>
          </Switch>
          <Navbar currentTab={state.currentTab} setState={setState} userId={state.userInfo.user_id} email={state.userInfo.email}/>
        </Router>
      </main>
    </>
  );
};

export default App;
