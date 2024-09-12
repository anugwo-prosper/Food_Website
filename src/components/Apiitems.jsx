import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Apiitems = ({ tunde }) => {
  const navigate = useNavigate();

  // Handle click event to navigate to the recipe details page
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

// Styled-components for the card
const Card = styled.div`
  width: 300px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;

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
  color: #333;
`;

export default Apiitems;



