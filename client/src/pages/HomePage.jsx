import React, { useContext } from 'react';
import { HookContext } from '../hook/useHookProvider';
import ChatBot from './ChatBotPage';
import Button from '../components/Button';

export const HomePage = () => {
    const { currentUser, logout } = useContext(HookContext); 
    console.log('currentUser', currentUser);

    return (
        <div>
            <h1>Home Page</h1>
            <p>Current User: {currentUser ? currentUser.fullName : 'None'}</p> 

            <Button onClick={logout} text="se deconnecter"/>

            <ChatBot />
        </div>
    );
}

export default HomePage;