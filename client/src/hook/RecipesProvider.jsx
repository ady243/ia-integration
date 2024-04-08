import React, { createContext, useState, useEffect } from "react";
import { API_URL } from "../configUrl";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        fetch(`${API_URL}/api/recipes`)
          .then((response) => response.json())
          .then((data) => {
            setRecipes(data.results);
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
