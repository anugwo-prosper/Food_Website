import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FoodAPI } from '../Fetch';

const Form = () => {
  const [film, setFilm] = useState('');
  let { setSearchKey } = useContext(FoodAPI);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchKey(film);
    setFilm('');
  };

  const handleChange = (e) => {
    setFilm(e.target.value);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Logo>Food Explorer</Logo>
      <InputWrapper>
        <Input 
          value={film}
          onChange={handleChange}
          type="text"
          placeholder="Search your recipe here"
        />
        <Button type="submit">Search</Button>
      </InputWrapper>
    </FormWrapper>
  );
};

// Styled-components
const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #ff6347; /* Warm food color */
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  font-size: 2rem;
  font-family: 'Pacifico', cursive; /* Fun food-themed font */
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: none;
  width: 300px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: white;
  color: #ff6347;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #ffe4e1;
  }
`;

export default Form;
