import React from 'react';

const FormGroup = ({text,children}) => (
  <div className="form-group">
    <label htmlFor={text}>{text.slice(0,1).toUpperCase() + text.slice(1)}</label>
    {children}
  </div>
);

export default FormGroup;
