import { useState, useEffect, useContext } from 'react';
import { API_URL } from '../configUrl';
import { HookContext } from './useHookProvider';

const useAllergy = () => {
    const { getToken } = useContext(HookContext);

    const token = getToken();

    const createAllergy = async (allergen) => {
        if(!token) {
            throw new Error('No token found');
        }

        try {
            const response = await fetch(`${API_URL}/api/allergy`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': token
                },
                body: JSON.stringify({ allergen })
            });
            const data = await response.json();
            console.log('data', data);
            if (!response.ok) {
                throw new Error(data.message);
            }
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const updateAllergy = async (allergenId, updatedInfo) => {
        try {
            const response = await fetch(`${API_URL}/api/allergy/${allergenId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': token
                },
                body: JSON.stringify(updatedInfo)
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

    const getAllergies = async () => {
        try {
            const response = await fetch(`${API_URL}/api/allergy/getAllAllergies`, {
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': token
                },
                method: 'GET'
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
    


    return { createAllergy, updateAllergy, getAllergies };
};

export default useAllergy;