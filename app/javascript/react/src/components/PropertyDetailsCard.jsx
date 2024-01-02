import React from 'react';
import styled from 'styled-components';

const PropertyDetailsCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 1.5rem;
    overflow: hidden;
    margin-right: 4rem;
    margin-bottom: 5rem;
    margin-left: -16rem;
    width: min-content;
    position: absolute;
    margin-top: 2rem;
`;

const CardBody = styled.div`
    background-color: white;
    width: 29rem;
    padding-right: 1rem;
    padding-left: 1rem;
    padding-bottom: 1rem;
    height: 27rem;
`;

const CardHeader = styled.div`
`;

const Name = styled.p`
    font-weight: bold;
    font-size: xx-large;
    height: 1.5rem;
`;

const Adress = styled.p`
    font-size: large;
    height: 35px;
    margin-top: 4rem;
    font-weight: lighter;
`;

const Price = styled.p`
    font-weight: bold;
    font-size: large;
`;

const Options = styled.div`
    display: flex;
    justify-content: space-between;
`;

const OptionsIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const OptionIcon = styled.img`
    width: 2rem;
`;

const Room = styled.p`
    font-size: medium;
`;

const Bathroom = styled.p`
    font-size: medium;
`;

const Area = styled.p`
    font-size: medium;
`;

const Divider = styled.hr`
    width: 100%;
    background-color: black;
    border: none;
    height: 1px;
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

const Description = styled.p`
    font-size: small;
    margin-top: 2rem;
    height: 7rem;
    overflow: scroll;
`;

const PropertyDetailsCard = ({price, name, address, description, bedrooms, bathrooms, area }) => {
  return (
    <PropertyDetailsCardContainer>
        <CardBody>
            <CardHeader>
                <Name>{name}</Name>
                <Adress>{address}</Adress> 
            </CardHeader>
            <Price>{price}</Price>
            <Options>
                <OptionsIcons>
                    <OptionIcon src="/assets/bed-icon.svg" alt="Bed" />
                    <Room>{bedrooms} Chambres</Room>
                </OptionsIcons>
                <OptionsIcons>
                    <OptionIcon src="/assets/bath-icon.svg" alt="Bath" />
                    <Bathroom>{bathrooms} Salles de bain</Bathroom>
                </OptionsIcons>
                <OptionsIcons>
                    <OptionIcon src="/assets/area-icon.svg" alt="Area" />
                    <Area>{area} m²</Area>
                </OptionsIcons>
            </Options>
            <Divider />
            <Description>{description}</Description>
        </CardBody>
    </PropertyDetailsCardContainer>
  );
};

export default PropertyDetailsCard;
