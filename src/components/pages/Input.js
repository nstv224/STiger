import React from "react";
import "./createSurvey.css"
function Input(props) {
  return (

    <div className="input-group mb-3 my-4">
      <span className="input-group-text" id="basic-addon1">?</span>
      <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="input question ??" onChange={(event) => props.setquestion(event.target.value)} />
      
    </div>
  );
}
export default Input;