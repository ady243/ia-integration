import React, { useContext } from 'react';
import { HookContext } from '../hook/useHookProvider';
import ChatBot from './ChatBotPage';
import DotLoad from '../components/load/DotLoad';
import ButtonTestSide from "./ButtonTestSide.jsx";
import ButtonTestGrocery from "./ButtonTestGrocery.jsx";

export const HomePage = () => {
    const { currentUser } = useContext(HookContext); 

    return (
        <div>
            <h1>Home Page</h1>
            <p>Current User: {currentUser ? currentUser.fullName : 'None'}</p>

            <ButtonTestSide/>
            <ButtonTestGrocery/>
            <ChatBot />
        </div>
    );
}

export default HomePage;