import Favorite from '../db/models/favorite.model.js';
import * as userService from './user.service.js';
import * as recipeService from './recipe.service.js';

export const toggleFavorite = async (userId, recipeId) => {
    const user = await userService.findOneById(userId);
    const recipe = await recipeService.getRecipeById(recipeId);
  
    if (!user || !recipe) {
      throw new Error('User or recipe not found');
    }
  
    let favorite = await Favorite.query().where({
      user_id: userId,
      recipe_id: recipeId,
    }).first();
  
    if (favorite) {
      await Favorite.query().deleteById(favorite.id);
      return false; 
    } else {
      favorite = await Favorite.query().insert({
        user_id: userId,
        recipe_id: recipeId,
      });
      return true; 
    }
  };
export const unToggleFavorite = async (userId, recipeId) => {
  const user = await userService.findAll(userId);
  const recipe = await recipeService.getRecipeById(recipeId);

  if (!user || !recipe) {
    throw new Error('User or recipe not found');
  }

  const favorite = await Favorite.query().where({
    user_id: userId,
    recipe_id: recipeId,
  }).first();

  if (!favorite) {
    throw new Error('Favorite not found');
  }

  await Favorite.query().deleteById(favorite.id);
}

export const getUserFavorites = async (userId) => {
  const user = await userService.findAll(userId);
    if (!user) {
        throw new Error('User not found');
    }

    return Favorite.query().where({ user_id: userId });
}