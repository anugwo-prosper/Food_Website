import React, { useState } from 'react';

const MealPlanner = ({ recipes }) => {
  const [mealPlan, setMealPlan] = useState({
    Monday: null,
    Tuesday: null,
    // Add other days
  });

  const handleAddRecipe = (day, recipe) => {
    setMealPlan(prev => ({
      ...prev,
      [day]: recipe,
    }));
  };

  return (
    <div>
      <h2>Meal Planner</h2>
      {Object.keys(mealPlan).map(day => (
        <div key={day}>
          <h3>{day}</h3>
          <select onChange={(e) => handleAddRecipe(day, recipes.find(r => r.id === e.target.value))}>
            <option value="">Select Recipe</option>
            {recipes.map(recipe => (
              <option key={recipe.id} value={recipe.id}>{recipe.title}</option>
            ))}
          </select>
          {mealPlan[day] && <p>{mealPlan[day].title}</p>}
        </div>
      ))}
    </div>
  );
};

export default MealPlanner;
