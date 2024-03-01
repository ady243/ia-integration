import React, { useContext } from 'react';
import { HookContext } from '../hook/useHookProvider';
import ChatBot from './ChatBotPage';
import DotLoad from '../components/load/DotLoad';

export const HomePage = () => {
    const { currentUser } = useContext(HookContext); 

    return (
        <div>
            <h1>Home Page</h1>
            <p>Current User: {currentUser ? currentUser.fullName : 'None'}</p> 
        

            <ChatBot />
        </div>
    );
}

export default HomePage;