import React, { useState, useEffect, useContext } from 'react';
import Button from '../components/Button';
import { LuSendHorizonal } from "react-icons/lu";
import { SiChatbot } from "react-icons/si";
import { HookContext } from '../hook/useHookProvider';
import DotLoad from '../components/load/DotLoad';
import './pages.css';

const ChatBot = () => {
    const { chatbot, getConversationHistory } = useContext(HookContext);
    const [isOpen, setIsOpen] = useState(false);
    const [deleteHistory, setDeleteHistory] = useState(false);
    const [data, setData] = useState([]);
    const [conversationHistory, setConversationHistory] = useState([]);
    const [userChatMessage, setUserChatMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const fetchConversationHistory = async (userChatMessage) => {
        setLoading(true);
        try {
            setUserChatMessage("");
            const response = await chatbot(userChatMessage);
            setConversationHistory(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
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
            fetchConversationHistory(userChatMessage);
        }
    }

    useEffect(() => {
        if (conversationHistory) {
            setData(conversationHistory);
        }

    }, [conversationHistory]);
    

    useEffect(() => {
        getCobversationHistory();
    }
    , []);

    useEffect(() => {
        if (deleteHistory) {
            deleteConversationHistory();
            setDeleteHistory(false);
        }
    }
    , [deleteHistory]);
    return (
        <>
            <div className="fixed bottom-5 right-5">
                {!isOpen && (
                    <Button
                        onClick={togglePopup}
                        text={<SiChatbot />}
                        className="text-black text-3xl bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-800 rounded-full p-2 focus:outline-none animate-bounce focus:shadow-outline transform transition duration-250 ease-in-out active:scale-110"
                    />
                )}
            </div>
            <div className={`card fixed bottom-5 right-5 ${isOpen ? 'card-open' : ''}`}>
                <div className="chat-container">
                    <div className="chat-header flex justify-between items-center mb-4">
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

                    {isOpen && (
                        <div className="chat-window flex flex-col space-y-2 w-full h-80 overflow-y-auto border border-gray-300 rounded-lg p-2">
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
                                        <DotLoad />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {isOpen && (
                        <div className="chat-input">
                            <input
                                type="text"
                                value={userChatMessage}
                                onChange={(e) => setUserChatMessage(e.target.value)}
                                placeholder="tapez votre message ici..."
                                className="message-input w-full p-2 mt-4 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Button
                                onClick={() => handleSubmit()}
                                text={<LuSendHorizonal />}
                                className="send-button"
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ChatBot;
