import React from 'react';
import styled from 'styled-components';

import theme from 'theme';

const Field = styled.input`
  display: block;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  border-color: ${theme.colors.black};
  border-width: 1px;
  width: 50%;
`;

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
