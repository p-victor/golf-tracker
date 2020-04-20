import React from "react";

export default function HoleInfo(props) {
  const { id } = props;

  return (
          <li className="hole">
            <div className="hole-num">Hole {id}</div>
            <div className="hole-par"><input name={`input-par-${id}`} placeholder="par" type="number" min="1" /></div>
            <div className="hole-yard"><input name={`input-yard-${id}`} placeholder="yard" type="number" min="1" /></div>
          </li>
  );
};