// Contains logic to render a single label and text input
import React from 'react';

// Field component gives us some props to work with
// Get error and touched destructured from meta which is being destructured from props
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className='red-text' style={{ marginBottom: '20px' }}>
        { touched && error }
      </div>
    </div>
  )
}