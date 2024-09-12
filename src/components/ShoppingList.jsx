import React from 'react';

const ShoppingList = ({ recipes }) => {
  const ingredients = recipes.flatMap(recipe => recipe.extendedIngredients);

  const aggregateIngredients = () => {
    const ingredientMap = new Map();
    ingredients.forEach(ingredient => {
      if (ingredientMap.has(ingredient.name)) {
        ingredientMap.set(ingredient.name, ingredientMap.get(ingredient.name) + ingredient.amount);
      } else {
        ingredientMap.set(ingredient.name, ingredient.amount);
      }
    });
    return Array.from(ingredientMap.entries());
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {aggregateIngredients().map(([name, amount], index) => (
          <li key={index}>{name}: {amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
