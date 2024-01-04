import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


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

const Navbar = ({ translations }) => {
  const [language, setLanguage] = useState(getInitialLanguage());

  function getInitialLanguage() {
    const languageCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('locale='));

    if (languageCookie) {
      const [, value] = languageCookie.split('=');
      return value;
    }

    return 'fr';
  }

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;

    fetch('/change_locale', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('[name=csrf-token]').content
      },
      body: JSON.stringify({ locale: newLanguage })
    }).then(response => {
      if (response.ok) {
        window.location.reload();
      }
    });

    setLanguage(newLanguage);
  };

  const getFlagImagePath = () => {
    switch (language) {
      case 'en':
        return "/assets/english-flag.svg";
      case 'fr':
      default:
        return "/assets/french-flag.svg";
    }
  };

  return (
    <NavbarContainer>
      <LogoLink href="/">
        <Logo src="/assets/home-logo.svg" alt="Logo" />
      </LogoLink>
      <NavRightItems>
        <ChangeLocales>
            <FlagContainer>
            <Flag src={getFlagImagePath()} alt="Flag" />
            </FlagContainer>
            <LanguageSelect onChange={handleLanguageChange} value={language}>
            <option value="fr">Français</option>
            <option value="en">English</option>
            </LanguageSelect>
        </ChangeLocales>
        <NavLinks>
          <NavLink href="/">{translations.home}</NavLink>
          <NavLink href="/properties">{translations.properties}</NavLink>
          <NavLink href="#">{translations.guides}</NavLink>
          <NavLink href="#">{translations.faq}</NavLink>
          <NavLink href="#">{translations.contact}</NavLink>
        </NavLinks>
      </NavRightItems>
    </NavbarContainer>
  );
};

export default Navbar;
