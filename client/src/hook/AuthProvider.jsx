import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [currentUser, setCurrentUser] = useState(null); 

    const saveToken = (newToken) => {
        setToken(newToken);
    };

    const saveCurrentUser = (user) => { 
        setCurrentUser(user);
        console.log('current user', user);
    };

    useEffect(() => {
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, saveToken, currentUser, saveCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};