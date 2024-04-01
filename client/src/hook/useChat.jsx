import { useState, useEffect, useContext } from 'react';
import { API_URL } from '../configUrl';
import { HookContext } from './useHookProvider';

const useChat = () => {
    const { token } = useContext(HookContext);
    const [data, setData] = useState(null);
    const [conversation, setConversation] = useState([]);
    const [userInput, setUserInput] = useState('');

    const chatbot = async (description) => {
        if (!token) {
            throw new Error('No token found');
        }

        try {
            const response = await fetch(`${API_URL}/api/chatbots`, {
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': token
                },
                method: 'POST',
                body: JSON.stringify({ description })
            });
            const data = await response.json();
            setData(data?.conversationHistory);
            setConversation(data?.conversation);
            return data?.conversation;
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        if (userInput) {
            chatbot(userInput);
        }   
    }, [userInput]); 

    return { data, userInput, setUserInput, chatbot };
};

export default useChat;