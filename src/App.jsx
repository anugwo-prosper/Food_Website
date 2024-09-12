import React, { useState } from 'react';
import Fetch from './Fetch';
import RecipeSearch from './components/RecipeSearch';
import MealPlanner from './components/MealPlanner';
import ShoppingList from './components/ShoppingList';
import Apiitems from './components/Apiitems';
import Apilist from './components/Apilist';
import Form from './components/Form';

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <Fetch>
        <Form />
        <RecipeSearch setRecipes={setRecipes} />
        <MealPlanner recipes={recipes} />
        <ShoppingList recipes={recipes} />
        <Apilist />
      </Fetch>
    </div>
  );
}

export default App;
