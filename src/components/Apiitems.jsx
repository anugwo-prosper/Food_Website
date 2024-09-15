import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Apiitems = ({ tunde }) => {
  const navigate = useNavigate();

  // i created this to handle click event to navigate to the recipe details page
  const handleClick = () => {
    navigate(`/recipe/${tunde.id}`);
  };

  return (
    <Card onClick={handleClick}>
      <img src={tunde.image} alt={tunde.title} />
      <Title>{tunde.title}</Title>
    </Card>
  );
};

const Card = styled.div`
  width: calc(25% - 20px); 
  background-color: #FF6347;
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;



const Title = styled.h3`
  font-size: 1.2rem;
  /* color: #333; */
  color: #ffffff;
`;

export default Apiitems;
