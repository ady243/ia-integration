import { useState, useEffect, useContext } from 'react';
import { API_URL } from '../configUrl';
import { HookContext } from './useHookProvider';


const useFavorite = () => {
    const { getToken } = useContext(HookContext);

    const token = getToken();

    const isToggleFavorite = async (userId, recipeId) => {
        if(!token) {
            throw new Error('No token found');
        }

        try {
            const response = await fetch(`${API_URL}/api/favorites/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': token
                },
                body: JSON.stringify({ userId, recipeId })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const isUnToggleFavorite = async (userId, recipeId) => {
        if(!token) {
            throw new Error('No token found');
        }
    
        try {
            const response = await fetch(`${API_URL}/api/favorite/${recipeId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': token
                },
                body: JSON.stringify({ userId })
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
            return;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const getAllToggleFavorite = async () => {
        if(!token) {
            throw new Error('No token found');
        }
    
        try {
            const response = await fetch(`${API_URL}/api/favorites/all`, {
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': token
                }
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return { isToggleFavorite, isUnToggleFavorite, getAllToggleFavorite };
};

export default useFavorite;