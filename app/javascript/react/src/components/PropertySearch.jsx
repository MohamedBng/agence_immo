import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  padding: 1rem;
  background-color: #3E8BE4;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: white;
  color: #3E8BE4;
  cursor: pointer;
  border-radius: 4px;
  margin: 0.5rem;
`;

const PropertySearch = ({ propertyStatusEnum, propertyTypeEnum }) => {
  const [searchParams, setSearchParams] = useState({
    city: '',
    propertyType: '',
    status: '',
    bathrooms: '',
    beds: ''
  });

  // Mettez à jour les paramètres de recherche
  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  // Soumettez la recherche (à implémenter)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchParams); // Remplacer par la logique de recherche
  };

  return (
    <SearchContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          name="city"
          type="text"
          placeholder="Ville"
          value={searchParams.city}
          onChange={handleChange}
        />
        <Select
          name="propertyType"
          value={searchParams.propertyType}
          onChange={handleChange}
        >
          <option value="">Type de propriété</option>
          {propertyTypeEnum.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </Select>
        <Select
          name="status"
          value={searchParams.status}
          onChange={handleChange}
        >
          <option value="">Statut</option>
          {propertyStatusEnum.map((status, index) => (
            <option key={index} value={status}>{status}</option>
          ))}
        </Select>
        <Input
          name="bathrooms"
          type="number"
          placeholder="Salle de bains"
          value={searchParams.bathrooms}
          onChange={handleChange}
        />
        <Input
          name="beds"
          type="number"
          placeholder="Lits"
          value={searchParams.beds}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Rechercher</SubmitButton>
      </Form>
    </SearchContainer>
  );
};

export default PropertySearch;
