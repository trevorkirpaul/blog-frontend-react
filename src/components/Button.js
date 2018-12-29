import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button``;

const Button = ({ onClick, label, disabled }) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {label}
  </StyledButton>
);

export default Button;
