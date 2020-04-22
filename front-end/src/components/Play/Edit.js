import React from "react";


export default function Edit(props) {
    const { holeEdit, scoreNShot, error, setScoreNShot, setShot } = props    //holeEdit = [1, "d-none"], 1 is hole number to edit, "d-none" is no display tag.
    
    function editButton(shot) {
      scoreNShot[`hole${holeEdit[0]}`][shot][0] = document.getElementsByClassName("editselectpicker")[0].value;
      scoreNShot[`hole${holeEdit[0]}`][shot][1] = document.getElementsByName("editComment")[0].value;
      alert("Edited Successfully");
      holeEdit[1] = "d-none";
      setScoreNShot(prev => ({...prev}));
    };
    
    function cancelButton() {
      holeEdit[1] = "d-none";
      setScoreNShot(prev => ({...prev}));
    };
    
    function deleteButton(shot) {
      scoreNShot[`hole${holeEdit[0]}`].splice(shot, 1);
      if (scoreNShot.score[holeEdit[0] - 1]) {scoreNShot.score[holeEdit[0] - 1]--};
      if (holeEdit[0] !== scoreNShot.score.length) {setShot[0] = setShot[0] - 1}
      setScoreNShot(prev => ({...prev}));
    };

    let editArr = [];

    if (scoreNShot[`hole${holeEdit[0]}`]) {

      for (let i = 0; i < scoreNShot[`hole${holeEdit[0]}`].length - 1; i++) {
        editArr.push(
          <div key={i}>
            <form>
              <label>Shot {i + 1}</label>
              <select className="editselectpicker" defaultValue={scoreNShot[`hole${holeEdit[0]}`][i][0]}>
                <option data-hidden="true" value="">Club Selection</option>
                <option value="Driver">Driver</option>
                <option value="Wood 3">Wood 3</option>
                <option value="Wood 5">Wood 5</option>
                <option value="Wood 7">Wood 7</option>
                <option value="Iron 2">Iron 2</option>
                <option value="Iron 3">Iron 3</option>
                <option value="Iron 4">Iron 4</option>
                <option value="Iron 5">Iron 5</option>
                <option value="Iron 6">Iron 6</option>
                <option value="Iron 7">Iron 7</option>
                <option value="Iron 8">Iron 8</option>
                <option value="Iron 9">Iron 9</option>
                <option value="P">P</option>
                <option value="S">S</option>
                <option value="A">A</option>
                <option value="Putter">Putter</option>
              </select>
              <label>
                Comment:
              </label>        
              <input
                name="editComment"
                placeholder={scoreNShot[`hole${holeEdit[0]}`][i][1]}
                type="text"
              />
            </form>
            <section className="club__validation">{error}</section>
          <div>
            <button onClick={() => editButton(i)}>Edit</button>
            <button onClick={() => deleteButton(i)}>Delete</button>
            <button onClick={cancelButton}>Cancel</button>
          </div>
        </div>
        )
      }
    }
    return editArr;

}