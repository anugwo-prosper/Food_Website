import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const apiKey = process.env.REACT_APP_API_KEY;

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
      const data = await response.json();
      setRecipe(data);
    };
    fetchRecipeDetails();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <RecipeWrapper>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
      <p><strong>Ingredients:</strong></p>
      <ul>
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <p><strong>Instructions:</strong></p>
      <p>{recipe.instructions}</p>
    </RecipeWrapper>
  );
};

// Styled-components for the detailed recipe page
const RecipeWrapper = styled.div`
  max-width: 800px;
  margin: 50px auto;
  text-align: center;
  
  img {
    width: 100%;
    border-radius: 15px;
    margin-bottom: 20px;
  }

  h1 {
    color: #ff6347;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 1.1rem;
    margin: 5px 0;
  }
`;

export default RecipeDetails;
