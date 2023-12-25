import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 4rem;
    width: 90%;
    max-width: 111rem;
    margin: 0 auto;
    margin-top: 15rem;
    height: 30rem;
}
`;

const ContactInfo = styled.div`
  flex-basis: 50%;
`;

const Title = styled.h2`
    width: 30rem;
    font-size: 2rem;
`;

const Paragraph = styled.p`
    width: 30rem;
    margin-bottom: 1rem;
`;

const Form = styled.form`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: white;
    border-radius: 4px;
`;

const Input = styled.input`
    margin-bottom: 1rem;
    padding: 1.5rem;
    background-color: #D9D9D9;
    border: none;
    border-radius: 4px;
`;

const Textarea = styled.textarea`
    margin-bottom: 1rem;
    padding: 1.5rem;
    height: 150px;
    width: 90%;
    background-color: #D9D9D9;
    border: none;
`;

const SubmitButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    justify-content: center;
    width: 15rem;
    padding: 1rem;
    margin: 0 auto;
    border-radius: 4px;
`;

const FooterContact = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <Title>Laissez-nous vous aider à trouver les meilleures propriétés résidentielles à Dubaï.</Title>
        <Paragraph>Vous recherchez une propriété à Dubaï qui prendra de la valeur avec le temps tout en vous offrant exclusivité et confort ? Vous êtes au bon endroit avec notre portefeuille, qui inclut uniquement les meilleures propriétés résidentielles des Émirats Arabes Unis.</Paragraph>
      </ContactInfo>
      <Form>
        <Input type="text" placeholder="Nom" required />
        <Input type="email" placeholder="Email" required />
        <Textarea placeholder="Message" required />
        <SubmitButton type="submit">Envoyer</SubmitButton>
      </Form>
    </FooterContainer>
  );
};

export default FooterContact;
