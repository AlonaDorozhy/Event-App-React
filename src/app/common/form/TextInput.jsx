import React from 'react'

const TextInput = ({input, width, type, placeholder, meta: {touched, error}}) => {
  return <div error={touched && !!error} width={width}>
      <input className="EvForm-field" {...input} placeholder={placeholder} type={type} />
    </div>;
}

export default TextInput
