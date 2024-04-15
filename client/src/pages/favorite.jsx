import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { HookContext } from '../hook/useHookProvider';
import useFavorite from "../hook/useFavorite";
import Button from "../components/Button";

export default function Favorite() {
    const { currentUser } = useContext(HookContext); 
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const { getAllToggleFavorite } = useFavorite();

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            setUser(currentUser);
        }
    }, [currentUser]);

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        console.log('Stored user:', storedUser);
        const userId = JSON.parse(storedUser).id;
        console.log('User id:', userId);
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const data = await getAllToggleFavorite();
                //display the name of the recipe
                console.log('Favorite data:', data);
            
                setFavorites(data);
            } catch (error) {
                console.error('Failed to fetch favorites:', error);
            }
        };

        fetchFavorites();
    }, []);

    return (
        <div className="container mx-auto">
            <Header />
            <div className="flex flex-wrap justify-center">
                <div className="mt-12">
                {favorites.map(favorite => (
                    
                    <div key={favorite.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col" style={{ maxWidth: "350px", maxHeight: "600px" }}>
                        <img className="w-full" src={favorite.recipe_id.imageUrl} alt={favorite.recipe_id.name} style={{ maxHeight: "200px", objectFit: "cover" }} /> 
                        <div className="px-6 py-4 flex-grow">
                            <div className="font-bold text-xl mb-2">{favorite.recipe_id.description}</div>
                        </div>
                        <div className="mt-auto mb-4">
                            <Link to={`/recipe/${favorite.recipe_id}`}>
                                <div className="flex justify-center"> 
                                   
                                      <Button className="bg-[#0ab3b3] text-white" text={"voir plus "} onClick={() => handleFavoriteClick(favorite.recipe_id)}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
                
            </div>
        </div>
    );
}