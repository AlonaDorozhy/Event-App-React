import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const DateInput = ({
  input: { value, onChange, ...restInput },
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <div error={touched && !!error}>
      <DatePicker className= 'EvForm-date'
        {...rest}
        placeholderText={placeholder}
        selected={value ? moment(value) : null}
        onChange={onChange}
        {...restInput}
      />
    </div>
  );
};

export default DateInput;
