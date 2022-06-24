import React from "react";
import classes from "styles/components/form/text-input.module.scss";

const TextArea = ({ type = "text", label, name, value, onChange, limit }) => {
  return (
    <div className={classes.input}>
      <label>{label}</label>
      <div>
        <textarea
          type={type}
          aria-label={label}
          onChange={onChange}
          name={name}
          value={value}
          rows={4}
        />
        {limit ? <p>{limit - value.length} </p> : null}
      </div>
    </div>
  );
};

export default TextArea;
