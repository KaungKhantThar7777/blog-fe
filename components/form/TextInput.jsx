import React from "react";
import classes from "styles/components/form/text-input.module.scss";

const TextInput = ({ type = "text", label, name, value, onChange, limit }) => {
  return (
    <div className={classes.input}>
      <label>{label}</label>
      <div>
        <input
          type={type}
          aria-label={label}
          onChange={onChange}
          name={name}
          value={value}
        />
        {limit ? <p>{limit - value.length} </p> : null}
      </div>
    </div>
  );
};

export default TextInput;
