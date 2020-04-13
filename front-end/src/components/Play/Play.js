import React, { useState } from "react";

export default function Search(props) {
  const { score, setScore } = useState([]);


  return(
    <main>
      <ScoreTable />
      <form>
        <input
          name="course"
          value={score}
          onChange={e => setScore(prev => prev.push(e.target.value))}
          placeholder="Your Score"
          type="number"
        />
      </form>
    </main>
  )
}