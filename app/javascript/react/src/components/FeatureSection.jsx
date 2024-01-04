import React, { useState } from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';

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
    margin-left: auto;
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

const FeatureSection = ({ ventes, locations, translatedBedrooms, translatedBathrooms, buyLabel, rentLabel, seeMoreLabel}) => {
    const [afficherVentes, setAfficherVentes] = useState(true);
    const [afficherLocations, setAfficherLocations] = useState(false);

    const handleVentesChange = () => {
        setAfficherVentes(true);
        setAfficherLocations(false);
    };

    const handleLocationsChange = () => {
        setAfficherLocations(true);
        setAfficherVentes(false);
    };

    const propertiesToShow = afficherVentes ? ventes : afficherLocations ? locations : [];

    return (
        <>
            <Title>Explorez nos Propriétés</Title>
            <CheckboxAndLink>
                <CheckboxContainer>
                    <CheckboxLabel>
                        <Checkbox 
                            name="vente"
                            checked={afficherVentes} 
                            onChange={handleVentesChange} 
                        />{buyLabel}
                    </CheckboxLabel>
                    <Separator>|</Separator>
                    <CheckboxLabel>
                        <Checkbox 
                            name="location"
                            checked={afficherLocations} 
                            onChange={handleLocationsChange}  
                        />{rentLabel}
                    </CheckboxLabel>
                </CheckboxContainer>
                <LinkContainer>
                    <StyledLink href="/properties">{seeMoreLabel}</StyledLink>
                    <Icon src="/assets/arrow-icon-simple.svg" alt="Icon" />
                </LinkContainer>
            </CheckboxAndLink>
            <SectionContainer>
                {propertiesToShow && propertiesToShow.length > 0 ? (
                    propertiesToShow.map((property, index,) => (
                        <FeatureCard
                            key={index}
                            id={property.id}
                            image={property.image}
                            price={property.price}
                            name={property.name}
                            address={property.address}
                            bedrooms={property.bedrooms}
                            bathrooms={property.bathrooms}
                            area={property.area}
                            translatedBedrooms={translatedBedrooms}
                            translatedBathrooms={translatedBathrooms}
                        />
                    ))
                ) : (
                    <p>Aucune propriété à afficher</p>
                )}
            </SectionContainer>
        </>
    );
};

export default FeatureSection;

