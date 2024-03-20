import React from 'react';

const Recommendation = ({ recommendations }) => {
  return (
    <div className="recommendation">
      <h2>Recommandations</h2>
      <ul>
        {recommendations.map((recipe, index) => (
          <li key={index}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
