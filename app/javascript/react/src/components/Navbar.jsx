import React from 'react';
import styled from 'styled-components';

// Styles pour la navbar
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: white;
  padding-bottom: 0;
  width: 100%;
  max-width: 111rem;
  margin: 0 auto;
  height: 10vh;
`;

const LogoLink = styled.a`
  text-decoration: none;
`;

const Logo = styled.img`
  width: 10rem;
  height: auto;
  margin-left: 3rem;
`;

const NavRightItems = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`;

const ChangeLocales = styled.div`
    display: flex;
    align-items: center;
    margin-right: 3rem;
    margin-top: -1rem;
`;

const NavLinks = styled.div`
    margin-right: 1.5rem;
    margin-top: 1.3rem;
`;

const NavLink = styled.a`
  margin-right: 1.5rem; // 15px
  color: black;
  text-decoration: none;
  font-size: medium;
`;

const FlagContainer = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.3rem;
`;

const Flag = styled.img`
  width: 100%;
  height: auto;
`;

const LanguageSelect = styled.select`
  border: none;
  background-color: transparent;
  font-size: 1rem; // 10px
  cursor: pointer;
  &:after {
    content: '▼';
    font-size: 1rem; // 10px
    padding-left: 0.5rem; // 5px
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoLink href="/">
        <Logo src="/assets/home-logo.svg" alt="Logo" />
      </LogoLink>
      <NavRightItems>
        <ChangeLocales>
            <FlagContainer>
            <Flag src="/assets/french-flag.svg" alt="Flag" />
            </FlagContainer>
            <LanguageSelect>
            <option value="fr">Français</option>
            <option value="en">English</option>
            </LanguageSelect>
        </ChangeLocales>
        <NavLinks>
            <NavLink href="/">ACCUEIL</NavLink>
            <NavLink href="/properties">TOUT LES BIENS</NavLink>
            <NavLink href="#">GUIDES</NavLink>
            <NavLink href="#">FAQ</NavLink>
            <NavLink href="#">NOUS CONTACTEZ</NavLink>
        </NavLinks>
      </NavRightItems>
    </NavbarContainer>
  );
};

export default Navbar;
