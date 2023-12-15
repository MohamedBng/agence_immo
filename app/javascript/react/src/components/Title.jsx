import React from 'react';
import styled from 'styled-components';

const TitleText = styled.p`
    margin-top: 0;
    font-weight: bold;
    font-size: 1.2rem;
`;

const Title = ({ title }) => {
  return (
    <TitleText>{title}</TitleText>
  );
};

export default Title;
