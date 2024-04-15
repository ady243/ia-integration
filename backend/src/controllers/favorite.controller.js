
import * as favoriteService from '../services/favorite.services.js'
import AppError from "../utils/appError.js"


export const toggleFavorite = async (req, res, next) => {
    try {
        const {
        session: {
            user: { id: userId },
        },
        body: { recipeId },
        } = req;
    
        const isFavorite = await favoriteService.toggleFavorite(userId, recipeId);
    
        res.status(200).json({ isFavorite });
    } catch (error) {
        next(error);
     
    }
    };


export const unToggleFavorite = async (req, res, next) => {
    try {
        const {
        session: {
            user: { id: userId },
        },
        body: { recipeId },
        } = req;
    
        await favoriteService.unToggleFavorite(userId, recipeId);
    
        res.status(204).end();
    } catch (error) {
        next(error);
        throw new AppError(400, 'fail', 'Missing required fields');
    }
}


export const getUserFavorites = async (req, res, next) => {
    try {
        const {
        session: {
            user: { id: userId },
        },
        } = req;
    
        const favorites = await favoriteService.getUserFavorites(userId);
    
        res.status(200).json(favorites);
    } catch (error) {
        next(error);
      
    }
    }
    

    export const getAllUserFavorites = async (req, res, next) => {
        try {
            const userId = req.user.id; 
            const favorites = await favoriteService.getUserFavorites(userId);
            res.status(200).json(favorites);
        } catch (error) {
            next(error);
        }
    }