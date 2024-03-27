import  { useState } from 'react';
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
            console.log(data)
            setGroceryList(data.groceryList);
            setShowModal(true); // Affiche la modal après avoir reçu les données
        } catch (error) {
            console.error('Error fetching grocery list:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Button onClick={generateGroceryList} text="Générer la liste de courses" />
            <Modal isOpen={showModal} message={groceryList} onClose={handleCloseModal} />
        </div>
    );
};

export default App;
