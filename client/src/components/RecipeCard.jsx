import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      {/* Add any other details you want to display */}
    </div>
  );
};

export default RecipeCard;
