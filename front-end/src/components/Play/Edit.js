import React from "react";


export default function Edit(props) {
    const { holeEdit, state, error, setState } = props    //holeEdit = [1, "d-none"], 1 is hole number to edit, "d-none" is no display tag.
    
    function editButton(shot) {
      state[`hole${holeEdit[0]}`][shot][0] = document.getElementsByClassName("editselectpicker")[0].value;
      state[`hole${holeEdit[0]}`][shot][1] = document.getElementsByName("editComment")[0].value;
      alert("Edited Successfully");
      holeEdit[1] = "d-none";
      setState(prev => ({...prev}));
    };
    
    function cancelButton() {
      holeEdit[1] = "d-none";
      setState(prev => ({...prev}));
    };
    
    function deleteButton(shot) {
      state[`hole${holeEdit[0]}`].splice(shot, 1);
      state.score[holeEdit[0] - 1]--
      setState(prev => ({...prev}));
    };

    let editArr = [];

    if (state[`hole${holeEdit[0]}`]) {

      for (let i = 0; i < state[`hole${holeEdit[0]}`].length - 1; i++) {
        editArr.push(
          <div>
            <form>
              <label>Shot {i + 1}</label>
              <select className="editselectpicker" defaultValue={state[`hole${holeEdit[0]}`][i][0]}>
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
                placeholder={state[`hole${holeEdit[0]}`][i][1]}
                type="text"
              />
            </form>
            <section className="club__validation">{error}</section>
          <div>
            <button className="btn btn-primary stredtched-link" onClick={() => editButton(i)}>Edit</button>
            <button className="btn btn-primary stredtched-link" onClick={() => deleteButton(i)}>Delete</button>
            <button className="btn btn-primary stredtched-link" onClick={cancelButton}>Cancel</button>
          </div>
        </div>
        )
      }
    }
    return editArr;

}