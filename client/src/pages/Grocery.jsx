import React, { useState } from 'react';
import Button from '../components/Button.jsx';
import ModalGrocery from '../components/ModalGrocery.jsx';
import RecipeLoader from '../components/load/RecipeLoader.jsx'; 

import { API_URL } from '../configUrl';

const App = () => {
    const [groceryList, setGroceryList] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false); // État de chargement initialisé à false

    const generateGroceryList = async () => {
        try {
            setLoading(true); // Activer le loader lorsque la requête démarre
            const response = await fetch(`${API_URL}/api/grocerylist`, {
                headers:{
                    'content-type':'application/json'
                },
                method:'POST'
            });
            const data = await response.json();
            setGroceryList(data.response);
            setShowModal(true);
        } catch (error) {
            console.error('Error fetching grocery list:', error);
        } finally {
            setLoading(false); // Désactiver le loader une fois la requête terminée (quelle que soit la résultat)
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const containerStyle = {
        textAlign: "left",
    };

    return (
        <div style={containerStyle}>
            <Button onClick={generateGroceryList} text="Liste de course" />
            {loading && <RecipeLoader />} {/* Afficher le loader si loading est true */}
            {showModal && (
                <ModalGrocery isOpen={showModal} message={groceryList} onClose={handleCloseModal} showIngredients={true} />
            )}
        </div>
    );
};

export default App;
