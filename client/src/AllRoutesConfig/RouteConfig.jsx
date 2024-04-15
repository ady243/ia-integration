import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRouter from './PrivateRouter'; 
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/Not-FoundPage';
import RecipeDetails from '../components/RecipeDetails';
import Grocery from '../pages/Grocery';
import Sidedish from '../pages/Sidedish';
import ProfilPage from '../pages/ProfilePage';

import { useParams } from 'react-router-dom';

import { API_URL } from '../configUrl';
import App from '../pages/Grocery';

const RoutesConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
                <Route path="/recipe/:id" element={<App />} />
                <Route path="/profile" element={<ProfilPage />} />
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