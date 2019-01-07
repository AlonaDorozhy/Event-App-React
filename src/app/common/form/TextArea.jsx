import React from 'react'


const TextArea = ({input, rows, width, type, placeholder, meta: {touched, error}}) => {
  return <div error={touched && !!error} width={width}>
      <textarea {...input} placeholder={placeholder} rows={rows} className="EvForm-field" {...input} placeholder={placeholder} rows={rows} />
    </div>;
}

export default TextArea
