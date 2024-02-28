import React, { useState, useEffect, useContext } from 'react';
import Button from '../components/Button';
import { LuSendHorizonal } from "react-icons/lu";
import { SiChatbot } from "react-icons/si";
import { API_URL } from '../configUrl';
import { AuthContext } from '../hook/AuthProvider';

const ChatBot = () => {
    const { token, currentuser } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [chatbotResponse, setChatbotResponse] = useState(null);
    const [userInput, setUserInput] = useState('');
    const [conversationHistory, setConversationHistory] = useState([]);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = () => {
        if (userInput.trim() === '') {
            console.error('User input is empty');
            return;
        }
    
        console.log("le token au chatBoy",token); 
        fetch(`${API_URL}/api/chatbot?description=${encodeURIComponent(userInput)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authentication': token
            }
        })
        .then(response => response.json())
        .then(data => {
            setChatbotResponse(data);
            console.log('chatbot response', data);
        })
        .catch(error => {
            console.log('Erreur:', error);
        });
    };

    useEffect(() => {
        if (isOpen) {
            setConversationHistory(prevHistory =>
                 [...prevHistory, { role: 'assistant',
                  content: 'Bonjour, je suis Ady. En quoi puis-je vous aider ?' }]);
        }
    }, [isOpen]);

    return (
        <div className="fixed bottom-5 right-5">
            <Button 
                onClick={togglePopup} 
                text={<SiChatbot />} 
                className="text-black text-3xl bg-transparent bg-gray-200 rounded-full p-2 focus:outline-none 
                focus:shadow-outline transform transition duration-500 ease-in-out active:scale-110"
            />
            {isOpen && (
                <div className="fixed bottom-16 right-12 bg-white p-4 shadow-md rounded-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">Ady</h2>
                        <button onClick={togglePopup}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <p className="text-gray-700">{chatbotResponse ? chatbotResponse.message : 'Bonjour, je suis Michelin. En quoi puis-je vous aider ?'}</p>
                    <div >
                    <input 
                        type="text" 
                        value={userInput} 
                        onChange={e => setUserInput(e.target.value)} 
                        placeholder="Tapez votre message ici"
                       className='w-full p-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                       
                    />
                    <Button onClick={handleSend} text={<LuSendHorizonal />}/>

                    </div>
                   
                </div>
            )}
        </div>
    );
};

export default ChatBot;