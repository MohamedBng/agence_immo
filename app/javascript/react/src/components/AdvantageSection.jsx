import React from 'react';
import styled from 'styled-components';

const AdvantageSectionContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    margin-top: 15rem;
    margin-bottom: 15rem;
`;

const AdvantageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
    margin-bottom: 8rem;
    width: 69%;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
    padding-top: 0;
    margin-top: 0;
`;

const AdvantageList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const AdvantageItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: medium;
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 1rem;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 1rem;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 21rem;
    padding: 1rem;

    &:hover {
      background-color: #0069d9;
      border-color: #0062cc;
    }
`;

const ButtonIcon = styled.img`
    margin-right: 10px;
    width: 3rem;
`;

const ImageContainer = styled.div`
    max-width: 50%;
    overflow: hidden;
    height: 26rem;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const AdvantageSection = () => {
  const advantages = [
    { text: "0% Property Tax", icon: "/assets/validate-icon.svg" },
    { text: "0% Commission Fee", icon: "/assets/validate-icon.svg" },
    { text: "0% Interest Rate For Payment Installments", icon: "/assets/validate-icon.svg" },
    { text: "10% Booking Amount", icon: "/assets/validate-icon.svg" },
    { text: "Payment With Cryptocurrency", icon: "/assets/validate-icon.svg" }
  ];

  return (
    <AdvantageSectionContainer>
      <AdvantageTextContainer>
        <Title>Plus qu'une maison, plus qu'un foyer.</Title>
        <AdvantageList>
          {advantages.map((advantage, index) => (
            <AdvantageItem key={index}>
              <Icon src={advantage.icon} alt="" />
              {advantage.text}
            </AdvantageItem>
          ))}
        </AdvantageList>
        <Button>
            En Savoir Plus
            <ButtonIcon src="/assets/arrow-icon-simple-white.svg" alt="Icon" />
        </Button>
      </AdvantageTextContainer>
      <ImageContainer>
        <Image src="/assets/house_near_threes.svg" alt="house near threes" />
      </ImageContainer>
    </AdvantageSectionContainer>
  );
};

export default AdvantageSection;
