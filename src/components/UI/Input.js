import React from "react";
const Input = (props) => {
  return (
    <div className="form-outline mb-4">
    <label className="form-label" htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        className="form-control form-control-lg"
        min={props.min}
        ref={props.reference}
        autoComplete="off"
        required
      />
    </div>
  );
};
export default Input;