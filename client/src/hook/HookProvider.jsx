import React, { createContext, useState, useEffect } from 'react';
import { API_URL } from '../configUrl';

// Créez le contexte et exportez-le
// export const AuthContext = createContext();


export const HookContext = createContext();

export const HookProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [currentUser, setCurrentUser] = useState(null); 
    const [data, setData] = useState(null);
    const [userInput, setUserInput] = useState('');

    const saveToken = (newToken) => {
        setToken(newToken);
    };

    const saveCurrentUser = (user) => { 
        setCurrentUser(user);
        console.log('current user', user);
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
            console.log('register data', data);
            saveToken(data.token);
            console.log('register token', data.token);
            saveCurrentUser(data.user);
        } catch (error) {
            console.error(error);
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

    useEffect(() => {
        const url = `${API_URL}/api/chatbot?description=${encodeURIComponent(userInput)}`;

        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'authentication': token
            }
        })
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    }, [token, userInput]); 

    return (
        <HookContext.Provider value={{ token, saveToken, currentUser, saveCurrentUser, login, logout, register, data, userInput, setUserInput }}>
            {children}
        </HookContext.Provider>
    );
};