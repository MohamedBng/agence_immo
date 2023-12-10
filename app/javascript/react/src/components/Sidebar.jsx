import React, { useState } from 'react';
import styled from 'styled-components';


const SidebarContainer = styled.div`
  width: 250px;
  background-color: #171717;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  text-align: center;
  display: flex;
  align-items: center; /* Alignez le texte et l'icône verticalement */
`;

const Icon = styled.span`
  margin-right: 10px; /* Espacement entre l'icône et le texte */
  img {
    width: 1.7rem;
  }
`;

const MenuItem = styled.a`
  padding: 10px 15px;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center; /* Alignez l'icône et le texte verticalement */
  
  &:hover {
    background-color: #5ce1e6;
    color: black;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <Icon>
            <img src="/assets/house.svg" alt="house" />
        </Icon>
        Agence Immo
      </Logo>
      <MenuItem href="/admin/dashboard">
        <Icon>
            <img src="/assets/house.svg" alt="house" />
        </Icon>
        Dashboard
      </MenuItem>
      <MenuItem href="/admin/users">
        <Icon>
            <img src="/assets/house.svg" alt="house" />
        </Icon>
        Users
      </MenuItem>
      {/* Ajoutez d'autres liens de menu ici */}
    </SidebarContainer>
  );
};

export default Sidebar;
