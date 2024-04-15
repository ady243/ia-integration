import React, { useState, useContext } from 'react';
import { SiChatbot } from "react-icons/si";
import { LuSendHorizonal } from "react-icons/lu";
import useChat from '../hook/useChat';

import './pages.css';
import DotLoad from '../components/load/DotLoad';

const ChatBot = () => {
   
    const { chatbot } = useChat();
    const [isOpen, setIsOpen] = useState(false);
    const [conversationHistory, setConversationHistory] = useState([]);
    const [userChatMessage, setUserChatMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const fetchConversationHistory = async () => {
        setLoading(true);
        try {
            const response = await chatbot(userChatMessage);
            setConversationHistory(response);
            setLoading(false);
            setUserChatMessage("");
        } catch (error) {
            setLoading(false);
        }
    }

    const handleSubmit = () => {
        if (userChatMessage) {
            fetchConversationHistory();
        }
    }
        
    const positionStyle = {
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            zIndex: '9999',      
        }; 
        
    return (
        <>
        <div style={positionStyle}>
        <div className={`chatbot-popup ${isOpen ? 'open' : ''}`}>
                <div className="chat-container">
                    <div className="chat-header flex justify-between items-center">
                        <h2 className="text-lg font-bold">Chat</h2>
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
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M18 18l-6-6 6-6"}
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="chat-window">
                        {conversationHistory && conversationHistory.map((item, index) => (
                            <div
                                key={index}
                                className={`${
                            item.role === "user"
                                ? "ml-auto bg-[#0ab3b3] text-sm text-white shadow-md font-medium my-2 rounded-l-lg" 
                                : "mr-auto bg-gray-300 text-sm shadow-md font-medium my-2" 
                        } p-2 rounded-md`}
                        >
                            <p>{item.content}</p>
                        </div>
                        ))}
                        {loading && (
                            <div className="flex justify-center">
                                <div>
                                  <DotLoad />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="chat-input">
                        <input
                            type="text"
                            value={userChatMessage}
                            onChange={(e) => setUserChatMessage(e.target.value)}
                            placeholder="Tapez votre message ici..."
                            className="message-input"
                        />
                      <button
                        onClick={handleSubmit}
                        className="send-button w-24 h-8 rounded-md"
                    >
                       Envoyer
                    </button>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-5 right-5">
                <button
                    onClick={togglePopup}
                    className="text-[ #0ab3b3] bg-[ #0ab3b3] text-5xl  rounded-full p-2 focus:outline-none focus:shadow-outline transform transition duration-250 ease-in-out active:scale-110"
                >
                    <span className='bg-[#0ab3b3]'><SiChatbot/></span>
                </button>
            </div>
        </div>
            
        </>
    );
};

export default ChatBot;
