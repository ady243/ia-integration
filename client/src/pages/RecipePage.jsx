import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/api/recipes'); // Appel de votre backend pour récupérer toutes les recettes
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Toutes les recettes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            description={recipe.description}
            method={recipe.method}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
