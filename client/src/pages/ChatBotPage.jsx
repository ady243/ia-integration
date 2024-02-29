import React, { useState, useEffect, useContext } from 'react';
import Button from '../components/Button';
import { LuSendHorizonal } from "react-icons/lu";
import { SiChatbot } from "react-icons/si";
import { HookContext } from '../hook/useHookProvider';

const ChatBot = () => {
    const { chatbot } = useContext(HookContext);
    const [isOpen, setIsOpen] = useState(false);
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

    const handleSubmit = () => {
        // Start the conversation call api

        if (userChatMessage) {
            fetchConversationHistory(userChatMessage);
        }
    }

    useEffect(() => {
        if (conversationHistory) {
            setData(conversationHistory);
        }
    }, [conversationHistory]);

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

            <div className="flex flex-col space-y-2 w-full">
              {conversationHistory && conversationHistory.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.role === "user"
                      ? "ml-auto bg-blue-500"
                      : "mr-auto bg-gray-300"
                  } p-2.5 rounded-md`}
                >
                  <p>{item.content}</p>
                </div>
              ))}
              {loading && (
                <div className="flex justify-center">
                  <div className="animate-bounce w-10 h-10 ">
                    <p className='text-2xl'>...</p>
                  </div>
                </div>
              )}
            </div>

            <div>
              <input
                type="text"
                value={userChatMessage}
                onChange={(e) => setUserChatMessage(e.target.value)}
                placeholder="Tapez votre message ici"
                className="w-full p-2 mt-4 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                onClick={() => handleSubmit()}
                text={<LuSendHorizonal />}
              />
            </div>
          </div>
        )}
      </div>
    );
};

export default ChatBot;