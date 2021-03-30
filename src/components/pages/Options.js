import React from "react";
import  "./createSurvey.css"
function Options(props) {
  return (

    <div class="input-group mb-3">
      <input
        className="form-control"
        type="text"
        value={
          props?.array[props.id]?.text
        }
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={(event) => props.change(event, props.id)}
        placeholder="Type answer here"
      />

      <span className="input-group-text spanred" id="basic-addon1" onClick={props.array.length < 4 ? props.handleArray : null}>+
      </span>
      <span className="input-group-text spanred" id="basic-addon1" onClick={(event) =>
            props.handleNegative ? props.handleNegative(event, props.id) : null
          }>-</span>
    </div>
  );
}
export default Options;