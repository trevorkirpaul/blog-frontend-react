import React from 'react';
import styled from 'styled-components';

import theme from 'theme';

const Styles = styled.textarea`
  display: block;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  border-color: ${theme.colors.black};
  border-width: 1px;
  width: 50%;
  resize: none;
`;

const TextArea = props => (
  <Styles
    name={props.name}
    placeholder={props.placeholder}
    onChange={props.onChange}
    rows={15}
    {...props}
  >
    {props.value}
  </Styles>
);

export default TextArea;
