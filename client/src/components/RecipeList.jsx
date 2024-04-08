

import React, { useState, useEffect, useContext } from 'react';
import { RecipeContext } from '../hook/RecipesProvider';

const RecipesList = ({ searchTerm }) => {
    const { recipes } = useContext(RecipeContext);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        const filtered = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
          );  
        setFilteredRecipes(filtered);
        console.log('Filtered recipes:', filtered);
    }, [searchTerm, recipes]);
   
   

    return (
        <div className="flex flex-wrap justify-center" style={{ marginTop: "535px"}}>
          
            {Array.isArray(filteredRecipes) && filteredRecipes.map(recipe => (
                <div key={recipe.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                    {/* <img className="w-full" src={recipe.image_url} alt={recipe.name} /> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{recipe.name}</div>
                        <p className="text-gray-700 text-base">
                            {recipe.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {/* Afficher d'autres informations de la recette si nécessaire */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecipesList;
