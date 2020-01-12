import React from 'react';

const Field = ({error, value, name, placeholder, onChange }) => {
  const inputStyle = error ? { borderColor: 'red' } : {};
  return (
    <div>
      {!!error?.length && (
        <p style={{ color: 'red' }}> {error} </p>
      )}
      <input
        style={inputStyle}
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Field;
