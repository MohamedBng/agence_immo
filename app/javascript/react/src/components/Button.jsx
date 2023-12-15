import React from 'react';
import styled from 'styled-components';

// Style du bouton, simulant Bootstrap 'btn btn-primary'
const StyledButton = styled.button`
    display: inline-block;
    padding: 0.375rem 0.75rem;
    margin: 10px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    background-color: #007bff;
    border: 1px solid #007bff;
    border-radius: 0.25rem;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    &:hover {
        background-color: #0069d9;
        border-color: #0062cc;
    }
`;

const Button = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
