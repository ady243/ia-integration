import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { RecipeContext } from '../hook/RecipesProvider';
import Button from './Button';

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
   
    const truncateDescription = (instructions, maxLength) => {
        if (instructions.length <= maxLength) {
            return instructions;
        } else {
            return instructions.substring(0, maxLength).trimRight() + '...';
        }
    };

    return (
        <div className="flex flex-wrap justify-center" style={{ marginTop: "535px"}}>
        {Array.isArray(filteredRecipes) && filteredRecipes.map(recipe => (
            <div key={recipe.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col" style={{ maxWidth: "350px", maxHeight: "600px" }}>
                <img className="w-full" src={recipe.imageUrl} alt={recipe.name} style={{ maxHeight: "200px", objectFit: "cover" }} /> 
                <div className="px-6 py-4 flex-grow">
                    <div className="font-bold text-xl mb-2">{recipe.name}</div>
                    <p className="text-gray-700 text-base">
                        {truncateDescription(recipe.instructions, 300)}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                </div>
                <div className="mt-auto mb-4">
                    <Link to={`/recipe/${recipe.id}`}>
                        <div className="flex justify-center"> 
                            <Button text="Voir la recette" />
                        </div>
                    </Link>
                </div>
            </div>
        ))}
    </div>
    );
};

export default RecipesList;
