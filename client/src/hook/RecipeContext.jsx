// RecipeContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import * as api from "../api/api";
import { Recipe } from "../model/types";
import "./RecipeContext.css";
import { API_URL } from '../configUrl';




// Créez un contexte
const RecipeContext = createContext();

// Créez un fournisseur pour le contexte de recette
export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchFavouriteRecipes = async () => {
      try {
        const favouriteRecipes = await api.getFavouriteRecipes();
        setFavouriteRecipes(favouriteRecipes.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavouriteRecipes();
  }, []);

  const addFavouriteRecipe = async (recipe) => {
    try {
      await api.addFavouriteRecipe(recipe);
      setFavouriteRecipes([...favouriteRecipes, recipe]);
    } catch (error) {
      console.log(error);
    }
  };



  // const fetchRecipes = async (searchTerm, pageNumber) => {
  //   try {
  //     const recipes = await api.searchRecipes(searchTerm, pageNumber);
  //     setRecipes(recipes.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchRecipes = async (searchTerm, pageNumber) => {
    try {
      const response = await fetch(`${API_URL}/api/recipes?search=${searchTerm}&page=${pageNumber}`,{ 
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ searchTerm, pageNumber })
    });
    const data = await response.json();
    if(!response.ok){
  console.log(data);
  throw new Error(data.message);
}
console.log('data', data);
setData(data);
    return data;
  }
  catch (error) {
    console.error(error);
    throw error;
  }
  };

  const removeFavouriteRecipe = async (recipe) => {
    try{
      const response = await fetch(`${API_URL}/api/recipes/${recipe.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe)
      });
      const data = await response.json();
      if(!response.ok){
        console.log(data);
        throw new Error(data.message);
      }
      console.log('data', data);
      setData(data);
      return data;

    }
    catch (error){
      console.error(error);
      throw error;
    }
  };


  return (
    <RecipeContext.Provider
      value={{
        recipes,
        favouriteRecipes,
        addFavouriteRecipe,
        removeFavouriteRecipe,
        fetchRecipes,
        data
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

// Créez un hook pour utiliser le contexte de recette
export const useRecipeContext = () => useContext(RecipeContext);
