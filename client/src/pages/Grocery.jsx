import React, { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';
import ModalGrocery from '../components/ModalGrocery.jsx';
import RecipeLoader from '../components/load/RecipeLoader.jsx';
import { API_URL } from '../configUrl';
import { useParams } from 'react-router-dom'; // Importer le hook useParams

const App = () => {
    const { id } = useParams(); // Récupérer l'ID de l'URL
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);
    const [groceryList, setGroceryList] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);


    const containerStyle = {

        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
    };


    useEffect(() => {
        setSelectedRecipeId(id); 
    }, [id]);

    const generateGroceryList = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/api/grocerylist/${selectedRecipeId}`, {
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST'
            });
            const data = await response.json();
            setGroceryList(data.response);
            setShowModal(true);
        } catch (error) {
            console.error('Error fetching grocery list:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

  

    return (
        <div style={containerStyle}>
            {/* Utiliser selectedRecipeId dans l'appel à generateGroceryList */}
            <Button onClick={generateGroceryList} text="Liste de courses" />
            {loading && <RecipeLoader />}
            {showModal && (
                <ModalGrocery isOpen={showModal} message={groceryList} onClose={handleCloseModal} showIngredients={true} />
            )}
        </div>
    );
};

export default App;
