import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #383838;
  color: #f8f8f8;
  padding: 10px 15px;
  border: 1px solid #383838;
  border-radius: 5px;

  ${props => {
    if (props.circle) {
      return `
        border-radius: 100%;
        width: 25px;
        height: 25px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
    }

    return null;
  }}

  &:hover {
    cursor: pointer;
    color: palevioletred;
  }
`;

const Button = ({ onClick, label, disabled, ...props }) => (
  <StyledButton circle={props.circle} disabled={disabled} onClick={onClick}>
    {label}
    {props.children}
  </StyledButton>
);

export default Button;
