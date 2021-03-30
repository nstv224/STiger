import React from "react";
function Options(props) {
  return (
    <div className="option-div">
      <input
        className="form-control"
        style={{padding:"5px 45px"}}
        value={
          props?.array[props.id]?.text
        }
        type="text"
        className="option-input"
        onChange={(event) => props.change(event, props.id)}
        placeholder="Type answer here"
      />
      <button
        className="btn"
        onClick={props.array.length < 4 ? props.handleArray : null}
      >
       ➕
      </button>
      <button
        className="btn"
        onClick={(event) =>
          props.handleNegative ? props.handleNegative(event, props.id) : null
        }
      >
        ➖
      </button>
    </div>
  );
}
export default Options;