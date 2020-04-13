import React, {useState} from "react";

export default function HoleInfo(props) {
  const { id } = props;

  return (
          <tr>
            <td>Hole {id}</td>
            <td className={`hole${id}`}><input name={`input-par-${id}`} type="number" min="1" /></td>
            <td className={`hole${id}`}><input name={`input-yard-${id}`} type="number" min="1" /></td>
          </tr>
  );
};