import React, { useState, useContext } from 'react';
import { HookContext } from '../hook/useHookProvider';
import { SiChatbot } from "react-icons/si";
import { LuSendHorizonal } from "react-icons/lu";

import './pages.css';

const ChatBot = () => {
    const { chatbot, getConversationHistory } = useContext(HookContext);
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
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const getCobversationHistory = async () => {
        try {
            const response = await getConversationHistory();
            setConversationHistory(response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = () => {
        if (userChatMessage) {
            fetchConversationHistory();
        }
    }

    return (
        <>
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
                                        ? "ml-auto bg-blue-500 text-sm text-white" 
                                        : "mr-auto bg-gray-300 text-sm" 
                                } p-2 rounded-md`}
                            >
                                <p>{item.content}</p>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-center">
                                <div>
                                    {/* Afficher votre composant de chargement ici */}
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
                            className="send-button"
                        >
                            <LuSendHorizonal />
                        </button>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-5 right-5">
                <button
                    onClick={togglePopup}
                    className="text-black text-5xl  rounded-full p-2 focus:outline-none focus:shadow-outline transform transition duration-250 ease-in-out active:scale-110"
                >
                    <span style={{fontSize: "2.5rem"}}><SiChatbot/></span>
                </button>
            </div>
        </>
    );
};

export default ChatBot;
