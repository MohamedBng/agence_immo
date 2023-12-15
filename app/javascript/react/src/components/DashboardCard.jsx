import React from 'react';
import styled from 'styled-components';

const DashboardCardContainer = styled.div`
    display: flex;
    flex-direction: column; /* Aligne les éléments verticalement */
    width: 200px;
    height: 170px;
    background-color: #55fff5;
    padding: 1rem;
    border-radius: 15px;
`;

const CardTitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: auto;
`;

const CardLink = styled.a`
    img {
        width: 3rem;
        align-self: flex-start;
    }
`;

const DashboardCard = ({ text, link, icon }) => {
  return (
    <DashboardCardContainer className="dashboard-card">
      <CardTitle>{text}</CardTitle>
      <CardLink href={link}>
        <img src={icon} alt={text} />
      </CardLink>
    </DashboardCardContainer>
  );
};

export default DashboardCard;
