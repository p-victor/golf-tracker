import React, { useEffect, useState } from "react";


export default function Edit(props) {
    const { holeEdit, scoreNShot, error, setScoreNShot, setShot, setHoleEdit, data } = props    //holeEdit = [1, "d-none"], 1 is hole number to edit, "d-none" is no display tag.
    const [ editShot, setEditShot ] = useState([])

    
    function editButton(shot) {
      let edittedClub = document.getElementsByClassName("editselectpicker")[shot].value;
      let edittedComment = document.getElementsByName("editComment")[shot].value;
      scoreNShot[`hole${holeEdit[0]}`][shot][0] = edittedClub;
      if (edittedComment) {
        scoreNShot[`hole${holeEdit[0]}`][shot][1] = edittedComment;
        document.getElementsByName("editComment")[shot].value = ""
      }
      alert("Edited Successfully");
      holeEdit[1] = "d-none";
      setScoreNShot(prev => ({...prev}));
    };
    
    function cancelButton() {
      holeEdit[1] = "d-none";
      setHoleEdit(prev => ([...prev]));
    };
    
    function deleteButton(shot) {
      scoreNShot[`hole${holeEdit[0]}`].splice(shot, 1);
      if (holeEdit[0] !== scoreNShot.score.length) {setShot[0] = setShot[0] - 1}
      setHoleEdit(prev => ([...prev]));
    };


    useEffect(() => {

      if (data()) {
        let editArr = [];
        for (let i = 0; i < data().length; i++) {
          let defValue = data()[i][0];
          editArr[i] = (
            <div key={i}>
              <p>{defValue}</p>
              <form>
                <label>Shot {i + 1}</label>
                <select className="editselectpicker" >
                  <option data-hidden="true" value="">Club Selection</option>
                  <option selected={"selected" && defValue === "Driver"} value="Driver">Driver</option>
                  <option selected={"selected" && defValue === "Wood 3"} value="Wood 3">Wood 3</option>
                  <option selected={"selected" && defValue === "Wood 5"} value="Wood 5">Wood 5</option>
                  <option selected={"selected" && defValue === "Wood 7"} value="Wood 7">Wood 7</option>
                  <option selected={"selected" && defValue === "Iron 2"} value="Iron 2">Iron 2</option>
                  <option selected={"selected" && defValue === "Iron 3"} value="Iron 3">Iron 3</option>
                  <option selected={"selected" && defValue === "Iron 4"} value="Iron 4">Iron 4</option>
                  <option selected={"selected" && defValue === "Iron 5"} value="Iron 5">Iron 5</option>
                  <option selected={"selected" && defValue === "Iron 6"} value="Iron 6">Iron 6</option>
                  <option selected={"selected" && defValue === "Iron 7"} value="Iron 7">Iron 7</option>
                  <option selected={"selected" && defValue === "Iron 8"} value="Iron 8">Iron 8</option>
                  <option selected={"selected" && defValue === "Iron 9"} value="Iron 9">Iron 9</option>
                  <option selected={"selected" && defValue === "P"} value="P">P</option>
                  <option selected={"selected" && defValue === "S"} value="S">S</option>
                  <option selected={"selected" && defValue === "S"} value="A">A</option>
                  <option selected={"selected" && defValue === "Putter"} value="Putter">Putter</option>
                </select>
                <label>
                  Comment:
                </label>        
                <input
                  name="editComment"
                  placeholder={data()[i][1]}
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
        setEditShot(editArr)
      }

    },[holeEdit])

    return editShot;

}