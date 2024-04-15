import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { RecipeContext } from '../hook/RecipesProvider';
import useFavorite from '../hook/useFavorite';
import { SlHeart } from "react-icons/sl";
import Button from './Button';
import { HookContext } from '../hook/useHookProvider';



const RecipesList = ({ searchTerm }) => {
    const { recipes } = useContext(RecipeContext);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const { currentUser } = useContext(HookContext); 
    const { isToggleFavorite } = useFavorite();
    const [user, setUser] = useState(null);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const [favoriteStatus, setFavoriteStatus] = useState({});

   

    useEffect(() => {
        const filtered = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
          );  
        setFilteredRecipes(filtered);
    }, [searchTerm, recipes]);
   
    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            setUser(currentUser);
        }
    }, [currentUser]);

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            const userId = JSON.parse(storedUser).id;
            setUser(JSON.parse(storedUser));
        }
    }, [])

    const handleFavoriteClick = async (recipeId) => {
     
        if (user) {
            const userId = user.id; 
            try {
                const data = await isToggleFavorite(userId, recipeId);
      
        
                if (data && data.isFavorite !== undefined) {
                    let newFavoriteStatus;
                    if (favoriteRecipes.includes(recipeId)) {
                        setFavoriteRecipes(prev => prev.filter(id => id !== recipeId));
                    
                        newFavoriteStatus = { ...favoriteStatus, [recipeId]: false };
                        setFavoriteStatus(newFavoriteStatus);
               
                    } else {
                        setFavoriteRecipes(prev => [...prev, recipeId]);
                       
                        newFavoriteStatus = { ...favoriteStatus, [recipeId]: true };
                        setFavoriteStatus(newFavoriteStatus);
         
                    }
                    localStorage.setItem('favoriteStatus', JSON.stringify(newFavoriteStatus));
                }
            } catch (error) {
                console.error('Error in isToggleFavorite', error);
            }
        }
    };
    
    const truncateDescription = (instructions, maxLength) => {
        if (instructions.length <= maxLength) {
            return instructions;
        } else {
            return instructions.substring(0, maxLength).trimRight() + '...';
        }
    };

    const toggleStyme = {
        cursor: "pointer",
    }

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
                <div className='flex w-48 '>
                <SlHeart onClick={() => handleFavoriteClick(recipe.id)} style={{ color: favoriteStatus[recipe.id] ? 'red' : 'black' }} />
                        {favoriteStatus[recipe.id] && <span className='text-red-500'>1</span>}  
                </div>
              
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
