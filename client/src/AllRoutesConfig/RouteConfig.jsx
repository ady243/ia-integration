import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRouter from './PrivateRouter'; 
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/Not-FoundPage';
import ChatBot from '../pages/ChatBotPage';

const RoutesConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/chat" element={<ChatBot />} />
                <Route path="/" element={
                    <PrivateRouter>
                        <HomePage />
                    </PrivateRouter>
                } />
                <Route path="*" element={<NotFoundPage />} /> 
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesConfig;