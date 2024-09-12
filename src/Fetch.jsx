import React, { createContext, useEffect, useState } from 'react';

// Use environment variable for the API key
const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=50`;

export const FoodAPI = createContext();

const Fetch = ({ children }) => {
  const [myapi, setmyApi] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  useEffect(() => {
    const getApi = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setmyApi(data.recipes);
    };
    getApi();
  }, []);

  useEffect(() => {
    console.log(myapi);
  }, [myapi]);

  return (
    <FoodAPI.Provider value={{ myapi, setmyApi, searchKey, setSearchKey, selectedMovie, setSelectedMovie }}>
      {children}
    </FoodAPI.Provider>
  );
};

export default Fetch;
