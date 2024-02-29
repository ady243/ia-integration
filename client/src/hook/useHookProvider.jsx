import React, { createContext, useState, useEffect } from 'react';
import { API_URL } from '../configUrl';


export const HookContext = createContext();

export const HookProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [currentUser, setCurrentUser] = useState(null); 
    const [data, setData] = useState(null);
    const [userInput, setUserInput] = useState('');
    

    const saveToken = (newToken) => {
        setToken(newToken);
        if (newToken) {
            localStorage.setItem('token', newToken);
        }
    };

    const saveCurrentUser = (user) => { 
        setCurrentUser(user);
    };

    const login = async (email, password) => {
        try {
            const response = await fetch(`${API_URL}/api/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            saveToken(data.token);
            saveCurrentUser(data.user);
        } catch (error) {
            console.error(error);
        }
    };

    const register = async (fullName, email, password) => {
        try {
            const response = await fetch(`${API_URL}/api/users/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, email, password })
            });
            const data = await response.json();
            if (!response.ok) {
                console.log(data);
                throw new Error(data.message);
            }
            console.log('register data', data);
            saveToken(data.token);
            console.log('register token', data.token);
            saveCurrentUser(data.user);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const logout = () => {
        saveToken(null);
        saveCurrentUser(null);
    };

    useEffect(() => {
        // if (token) {
        //     fetch(`${API_URL}/api/users/me`, {
        //         headers: { 'Authorization': `Bearer ${token}` }
        //     })
        //     .then(response => response.json())
        //     .then(data => saveCurrentUser(data))
        //     .catch(error => console.error(error));
        // }
    }, [token]);

    const chatbot = async (description) => {

        // get token from local storage
        const tokenLocalStorage = localStorage.getItem('token');
        if (tokenLocalStorage) {
            setToken(tokenLocalStorage);
        } else {
            throw new Error('No token found');
        }

        try {
            const response = await fetch(`${API_URL}/api/chatbot`, {
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': token
                },
                method: 'POST',
                body: JSON.stringify({ description })
            });
            const data = await response.json();
            console.log('chatbot data : ', data?.conversationHistory);
            setData(data?.conversationHistory);
            return data?.conversationHistory;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (userInput) {
            chatbot(userInput);
        }   
    }, [token, userInput]); 

    return (
        <HookContext.Provider value={{ token, saveToken, currentUser, saveCurrentUser, login, logout, register, data, userInput, setUserInput, chatbot}}>
            {children}
        </HookContext.Provider>
    );
};