import React, { useContext, useEffect, useState } from 'react';
import { HookContext } from '../hook/useHookProvider';
import ChatBot from './ChatBotPage';
import DotLoad from '../components/load/DotLoad';
import ButtonTestSide from "./ButtonTestSide.jsx";
import ButtonTestGrocery from "./ButtonTestGrocery.jsx";

export const HomePage = () => {
    const { currentUser, logout } = useContext(HookContext); 
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            setUser(currentUser);
        }
    }, [currentUser]);

    console.log('currentUser', user);

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