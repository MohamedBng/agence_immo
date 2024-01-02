import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard'; // Assurez-vous d'importer le composant FeatureCard

const SectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10rem;
`;

const Title = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5rem;
`;

const CheckboxContainer = styled.div`
    border-radius: 1rem;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    width: max-content;
`;

const CheckboxLabel = styled.label`
    margin: 0 1rem;
    cursor: pointer;
`;

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto; // Pousse le conteneur vers la droite
`;

const StyledLink = styled.a`
    margin-right: 0.5rem;
    text-decoration: none;
    font-weight: bold;
    color: #3E8BE4;
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 0.5rem;
`;

const CheckboxAndLink = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 6rem;
`;

const Separator = styled.span`
    margin: 0 1rem;
`;

const FeatureSection = ({properties}) => {
    return (
        <>
            <Title>Explorez nos Propriétés</Title>
            <CheckboxAndLink>
                <CheckboxContainer>
                    <CheckboxLabel>
                        <Checkbox />Achetez
                    </CheckboxLabel>
                    <Separator>|</Separator>
                    <CheckboxLabel>
                        <Checkbox />Louer
                    </CheckboxLabel>
                </CheckboxContainer>
                <LinkContainer>
                    <StyledLink href="https://example.com">Voir plus</StyledLink>
                    <Icon src="/assets/arrow-icon-simple.svg" alt="Icon" />
                </LinkContainer>
            </CheckboxAndLink>
            <SectionContainer>
                {properties.map((property, index) => (
                    <FeatureCard
                        key={index}
                        image={property.image}
                        price={property.price}
                        name={property.name}
                        address={property.address}
                        bedrooms={property.bedrooms}
                        bathrooms={property.bathrooms}
                        area={property.area}
                        id={property.id}
                    />
                ))}
            </SectionContainer>
        </>
    );
};

export default FeatureSection;
