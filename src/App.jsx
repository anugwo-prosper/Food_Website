import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Fetch from './Fetch';
import Form from './components/Form';
import Apilist from './components/Apilist';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    
      <div className="App">
        {/* Fetch wraps the child components with the API context */}
        <Fetch>
          <Form />
          {/* Define the routes */}
          <Routes>
            <Route path="/" element={<Apilist />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </Fetch>
      </div>
  
  );
}

export default App;
