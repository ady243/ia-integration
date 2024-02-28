import React, { useState, useEffect, useContext } from 'react';
import Button from '../components/Button';
import { LuSendHorizonal } from "react-icons/lu";
import { SiChatbot } from "react-icons/si";
import { HookContext } from '../hook/HookProvider';

const ChatBot = () => {
    const {setUserInput } = useContext(HookContext);
    const [data, setData] = useState({message: ''});
    const [isOpen, setIsOpen] = useState(false);
    const [conversationHistory, setConversationHistory] = useState([]);

    const togglePopup = () => {
        setIsOpen(!isOpen);
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
                className="text-black text-3xl bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-800
                 rounded-full p-2 focus:outline-none animate-bounce
                focus:shadow-outline transform transition duration-250 ease-in-out active:scale-110"
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
                    <p className="text-gray-700">{data ? data.message : 'Bonjour, je suis Michelin. En quoi puis-je vous aider ?'}</p>
                    <div >
                    <input 
                        type="text" 
                        onChange={e => setUserInput(e.target.value)} 
                        placeholder="Tapez votre message ici"
                       className='w-full p-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                       
                    />
                    <Button onClick={() => setUserInput('')} text={<LuSendHorizonal />}/>

                    </div>
                   
                </div>
            )}
        </div>
    );
};

export default ChatBot;