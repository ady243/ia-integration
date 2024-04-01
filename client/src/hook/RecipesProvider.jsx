import React, { createContext, useState, useEffect } from "react";
import { API_URL } from '../configUrl';


export const RecipeContext = createContext();

// Créez un fournisseur pour le contexte de recette
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

  


  // const fetchRecipes = async (searchTerm, pageNumber) => {
  //   try {
  //     const recipes = await api.searchRecipes(searchTerm, pageNumber);
  //     setRecipes(recipes.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

//   const fetchRecipes = async (searchTerm, pageNumber) => {
//     try {
//       const response = await fetch(`${API_URL}/api/recipes?search=${searchTerm}&page=${pageNumber}`,{ 
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ searchTerm, pageNumber })
//     });
//     const data = await response.json();
//     if(!response.ok){
//   console.log(data);
//   throw new Error(data.message);
// }
// console.log('data', data);
// setData(data);
//     return data;
//   }
//   catch (error) {
//     console.error(error);
//     throw error;
//   }
//   };



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

// Créez un hook pour utiliser le contexte de recette
// export const RecipesContext = () => useContext(RecipeContext);