import { useState, useEffect } from "react";
import axios from "axios";


export default function useApp(props) {
  const [state, setState] = useState({
    holes: [],
    holeScores: [],
    shots: [],
    games: [],
    golfCourses: [],
    weathers: []
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/holes"),
      axios.get("/api/holescores"),
      axios.get("/api/shots"),
      axios.get("/api/games"),
      axios.get("/api/courses"),
      axios.get("/api/weathers")
    ]).then(all => {
      setState(prev => ({
        ...prev, 
        holes: all[1]["data"],
        holeScores: all[2]["data"],
        shots: all[3]["data"],
        games: all[4]["data"],
        golfCourses: all[5]["data"],
        weathers: all[6]["data"],
      }))
    });
  },[]);

  return { state, setState }
}