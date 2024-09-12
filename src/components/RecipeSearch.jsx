import React, { useState } from 'react';

const RecipeSearch = ({ setRecipes }) => {
  const [diet, setDiet] = useState('');

  const handleSearch = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&apiKey=${process.env.REACT_APP_API_KEY}`);
    const data = await response.json();
    setRecipes(data.results);
  };

  return (
    <div>
      <h2>Search Recipes</h2>
      <select onChange={(e) => setDiet(e.target.value)}>
        <option value="">Select a diet</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten-free">Gluten-Free</option>
        {/* Add more options as needed */}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default RecipeSearch;
