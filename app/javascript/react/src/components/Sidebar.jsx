import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 16rem;
  background-color: #171717;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const Logo = styled.p`
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

const Icon = styled.span`
  margin-right: 10px; /* Espacement entre l'icône et le texte */
  img {
    width: 1rem;
  }
`;

const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  font-size: 1.2rem;
  gap: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;

  &:hover {
    background-color: #5ce1e6;
    color: black;
  }

  &:not(:last-child) {
    margin-bottom: 10px; /* Espace entre les éléments du menu */
  }
`;

const Divider = styled.hr`
    width: 80%;
    background-color: white;
    border: none;
    height: 1px;
    margin: auto;
    margin-bottom: 15px;

`;

const handleLogout = () => {
    // Récupérez le jeton CSRF à partir des balises meta
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  
    // Créez un objet de configuration pour la requête DELETE
    const requestOptions = {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": csrfToken, // Ajoutez le jeton CSRF aux en-têtes
        "Content-Type": "application/json",
      },
    };
  
    // Effectuez la requête DELETE vers votre URL de déconnexion
    fetch("/users/sign_out", requestOptions)
      .then((response) => {
        if (response.ok) {
          // Redirigez l'utilisateur après la déconnexion
          window.location.replace("/");
        } else {
          console.error("Erreur lors de la déconnexion");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la déconnexion", error);
      });
  };

const LogoutItem = styled(MenuItem)`
`;

const Sidebar = ({ canAccessUsers }) => {
  return (
    <SidebarContainer>
      <Logo>
        <Icon>
          <img src="/assets/house-icon.svg" alt="house" />
        </Icon>
        Agence Immo
      </Logo>
        <MenuItem href="/admin/dashboard">
          <Icon>
            <img src="/assets/dashboard-icon.svg" alt="dashboard" />
          </Icon>
          Dashboard
        </MenuItem>
      {canAccessUsers && (
        <MenuItem href="/admin/users">
          <Icon>
            <img src="/assets/users-icon.svg" alt="users" />
          </Icon>
          Users
        </MenuItem>
      )}
      <Divider />
      <LogoutItem onClick={handleLogout}>
        <Icon>
          <img src="/assets/logout-icon.svg" alt="logout" />
        </Icon>
        Logout
      </LogoutItem>
    </SidebarContainer>
  );
};

export default Sidebar;
