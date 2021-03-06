import { useState, useEffect } from "react";

import axios from "axios";


export default function useApp(props) {
  const [state, setState] = useState({
    holes: [],
    holeScores: [],
    shots: [],
    games: [],
    golfCourses: [],
    weathers: [],
    userGames: [],
    userInfo: [],
    trigger: [0],
    currentTab: "search"
  });



  useEffect(() => {
    Promise.all([
      axios.get("/api/holes"),
      axios.get("/api/holescores"),
      axios.get("/api/shots"),
      axios.get("/api/games"),
      axios.get("/api/courses"),
      axios.get("/api/weathers"),
      axios.get("/api/usergames"),
      axios.get("/api/isloggedin"),
    ]).then(all => {
      setState(prev => ({
        ...prev,
        holes: all[0]["data"],
        holeScores: all[1]["data"],
        shots: all[2]["data"],
        games: all[3]["data"],
        golfCourses: all[4]["data"],
        weathers: all[5]["data"],
        userGames: all[6]["data"],
        userInfo: all[7]["data"],
      }))
    });

  }, [state.trigger, state.currentTab]);

  return { state, setState }
}