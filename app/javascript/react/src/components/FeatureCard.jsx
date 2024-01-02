import React from 'react';
import styled from 'styled-components';

const FeatureCardContainer = styled.div`
    width: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardImageContainer = styled.div`
    width: 25rem;       
    border-radius: 1.5rem;
    overflow: hidden;
`;

const CardImage = styled.img`
    width: 100%;
    object-fit: cover;
`;

const CardBody = styled.div`
    background-color: white;
    width: 20rem;
    border-radius: 1rem;
    margin-top: -3rem;
    padding-right: 1rem;
    padding-left: 1rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Price = styled.p`
    font-weight: bold;
    font-size: larger;
`;

const Icon = styled.img`
    width: 1.3rem;
`;

const Name = styled.p`
    font-weight: bold;
    font-size: larger;
`;

const Adress = styled.p`
    font-size: medium;
`;

const Divider = styled.hr`
    width: 100%;
    background-color: black;
    border: none;
    height: 1px;
    margin: auto;
    margin-bottom: 5px;
    margin-top: 5px;

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
    width: 1.2rem;
`;

const Room = styled.p`
    font-size: smaller;
`;

const Bathroom = styled.p`
    font-size: smaller;
`;

const Area = styled.p`
    font-size: smaller;
`;


const StyledLink = styled.a`
`;

const FeatureCard = ({ id, price, name, address, image, bedrooms, bathrooms, area }) => {
  const formatPrice = (price) => {
    return "$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };  
  return (
    <FeatureCardContainer>
        <CardImageContainer>
            <CardImage src={image} alt="Feature card" />
        </CardImageContainer>
        <CardBody>
            <CardHeader>
                <Price>{formatPrice(price)}</Price>
                <StyledLink href={`/properties/${id}`}>
                    <Icon src="/assets/arrow-icon.svg" alt="Détails" />
                </StyledLink>
            </CardHeader>
            <Name>{name}</Name>
            <Adress>{address}</Adress>

            <Divider />
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
        </CardBody>
    </FeatureCardContainer>
  );
};

export default FeatureCard;
