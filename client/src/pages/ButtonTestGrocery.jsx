import React, { useState } from 'react';
import Button from '../components/Button.jsx';
import Modal from '../components/Modal.jsx';

import { API_URL } from '../configUrl';

const App = () => {
    const [groceryList, setGroceryList] = useState('');
    const [showModal, setShowModal] = useState(false);

    const generateGroceryList = async () => {
        try {
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
      <Button onClick={generateGroceryList} text="Liste de course" />
      <Modal isOpen={showModal} message={groceryList} onClose={handleCloseModal} />
    </div>

    );
};

export default App;