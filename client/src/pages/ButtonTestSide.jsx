import React, { useState } from 'react';
import Button from '../components/Button.jsx';
import Modal from '../components/Modal.jsx';

import { API_URL } from '../configUrl';

const App = () => {
    const [sideDish, setSideDish] = useState('');
    const [showModal, setShowModal] = useState(false);

    const generateSideDish = async () => {
        try {
            const response = await fetch(`${API_URL}/api/sidedish`, {
                headers:{
                    'content-type':'application/json'
                },
                method:'POST'
            });
            const data = await response.json();
            setSideDish(data.response);
            setShowModal(true);
        } catch (error) {
            console.error('Error fetching side dish:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    const containerStyle = {
        textAlign: "right",
      };

    return (
        <div style={containerStyle}>
      <Button onClick={generateSideDish} text="Générer l'accompagnement" />
      <Modal isOpen={showModal} message={sideDish} onClose={handleCloseModal} />
    </div>

    );
};

export default App;