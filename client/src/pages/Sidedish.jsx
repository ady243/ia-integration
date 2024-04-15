import React, { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';
import ModalSide from '../components/ModalSide.jsx';
import RecipeLoader from '../components/load/RecipeLoader.jsx';
import { API_URL } from '../configUrl';
import { useParams } from 'react-router-dom';

const App = () => {
    const { id } = useParams();
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);
    const [sideDish, setSideDish] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setSelectedRecipeId(id);
    }, [id]);

    const generateSideDish = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/api/sidedish/${selectedRecipeId}`, {
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST'
            });
            const data = await response.json();
            setSideDish(data.response);
            setShowModal(true);
        } catch (error) {
            console.error('Error fetching side dish:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (selectedRecipeId) {
            generateSideDish();
        }
    }, [selectedRecipeId]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const containerStyle = {
        textAlign: "left",
    };

    return (
        <div style={containerStyle}>
            <Button onClick={generateSideDish} text="Accompagnement" />
            {loading && <RecipeLoader />}
            {showModal && (
                <ModalSide isOpen={showModal} message={sideDish} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default App;
