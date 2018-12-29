import React from 'react';
import styled from 'styled-components';

const Field = styled.input``;

const TextField = ({ type = 'text', name, onChange, value, placeholder }) => (
  <Field
    type={type}
    name={name}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />
);

export default TextField;
