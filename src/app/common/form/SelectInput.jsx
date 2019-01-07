import React from "react";
import Select from "react-select";

const SelectInput = ({
  input,
  type,
  value,
  placeholder,
  multiple,
  options,

  meta: { touched, error }
}) => {
  return (
    <div error={touched && !!error}>
      <Select
        placeholder={placeholder}
        onChange={(e, data) => input.onChange(data.value)}
        className="EvForm-field"
        options={options}
      />
      {touched && error && <label basic color='red'>{error}</label>}
    </div>
  );
};

export default SelectInput;
