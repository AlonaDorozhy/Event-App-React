import React from 'react'


const TextArea = ({input, rows, width, type, placeholder, meta: {touched, error}}) => {
  return <div error={touched && !!error} width={width}>
      <textarea className="EvForm-field" {...input} placeholder={placeholder} rows={rows} />
    </div>;
}

export default TextArea
