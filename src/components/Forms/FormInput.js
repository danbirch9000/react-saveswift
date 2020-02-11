import React from "react";

const FormInput = (props) => {

  return (
    <div className="input-container">
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.name}
        name={props.name}
        type="text"
        ref={props.register({ required: true })} />
      {props.errors.value && <div className="form-input-validation">{props.label} field is required</div>}
    </div>
  );
};


export default FormInput;