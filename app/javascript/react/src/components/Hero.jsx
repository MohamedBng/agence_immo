import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  background-image: url("/assets/dubai-marina.jpg");
  color: black;
  text-align: left;
  padding-left: 4.5rem;
  height: 71vh;
  background-size: cover;
  padding-top: 8rem;
`;

const MainText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  width: 29rem;
`;

const Subtitle = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: lighter;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  width: 40rem;
  border-radius: 41px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1.5rem;
  padding-left: 1.5rem;
  padding-left: 2.5rem;
  border: 1px solid #ccc;
  background-color: white;
  font-style: italic;
  border-radius: 10px;
`;

const SearchButton = styled.button`
  background-color: #3E8BE4;
  color: white;
  border: none;
  padding: 1rem;
  margin-left: -7rem;
  border-radius: 5px;
`;

const IconsContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 4.5rem;
  display: flex;
  gap: 1rem;
`;

const IconCircle = styled.div`
  width: 3rem; // Taille de l'icône
  height: 3rem;
  border-radius: 50%;
  background-color: white; // Couleur de fond des cercles
  display: flex;
  justify-content: center;
  align-items: center;

  &.green {
    background-color: #46CC6B;
  }

  &.blue {
    background-color: #3E8BE4;
  }
`;

const Icon = styled.img`
  width: 60%;
  height: auto;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <MainText>Rêver, Investir, Réussir Avec La Meilleure Agence Immobilière À Dubaï Devoyl Capital</MainText>
      <Subtitle>Nous Offrons Les Meilleurs Services Immobiliers</Subtitle>
      <SearchBar>
        <SearchInput placeholder="Rechercher une Ville ou une Adresse" />
        <SearchButton>Rechercher</SearchButton>
      </SearchBar>
      <IconsContainer>
        <IconCircle className="green"> <Icon src="/assets/whatsapp-icon.svg" alt="Flag" /></IconCircle>
        <IconCircle className="blue"> <Icon src="/assets/telephone-icon.svg" alt="Flag" /></IconCircle>
        <IconCircle> <Icon src="/assets/instagram-icon.svg" alt="Flag" /></IconCircle>
      </IconsContainer>
    </HeroContainer>
  );
};

export default Hero;
