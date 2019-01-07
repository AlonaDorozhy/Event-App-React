import React from "react";
import Select from "react-select";

const SelectInput = ({ options }) => {
  return (
    <div>
      <Select className="EvForm-field" options={options} />
    </div>
  );
};

export default SelectInput;
