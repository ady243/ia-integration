import React, { useContext } from 'react';
import { AuthContext } from '../hook/AuthProvider';
import ChatBot from './ChatBotPage';

export const HomePage = () => {
    const { currentUser } = useContext(AuthContext); 

    return (
        <div>
            <h1>Home Page</h1>
            <p>Current User: {currentUser ? currentUser.fullName : 'None'}</p> 

            <ChatBot />
        </div>
    );
}

export default HomePage;