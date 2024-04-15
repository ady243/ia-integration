import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { HookContext } from '../hook/useHookProvider';
import useFavorite from "../hook/useFavorite";
import Button from "../components/Button";
import { SlArrowLeft } from "react-icons/sl";

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
      
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const data = await getAllToggleFavorite();
         
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
            <div>
            <Link to="/" className="flex items-center  text-sm ">
                        <SlArrowLeft className="mr-2" /> Retour
            </Link>
            </div>
          <h1 className="text-center mt-24 underline decoration-sky-500">Mes Favoris</h1>
            <div className="flex flex-wrap justify-center">
              <span class="relative flex h-3 w-3 mt-24">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500" flex></span>
                En construction ...
                </span>
                <div className="mt-24">
                <div className=" absolute -left-52">
                <img src="https://zupimages.net/up/24/16/wkxa.png" alt="En construction" style={{ transform: "scaleX(-1)", width: "55%", height: "auto" }} />
                </div>
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