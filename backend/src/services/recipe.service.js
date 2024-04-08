import Recipe from "../db/models/recipe.model.js"

import APIFeatures from "../utils/apiFeatures.js"

export const findAll = async (queryString) => {
  try {
    const features = new APIFeatures(Recipe.query(), queryString)
      .limit()
      .sort()
      .paginate()

    return await features.query
  } catch (error) {
    throw error
  }
};


export const findById = async (id) => {
  try {
    return await Recipe.query().findById(id);
  } catch (error) {
    throw error;
  }
};

export const create = async (data) => {
  try {
    return await Recipe.query().insert(data);
  } catch (error) {
    throw error;
  }
};


export const update = async (id, data) => {
  try {
    return await Recipe.query().patchAndFetchById(id, data);
  } catch (error) {
    throw error;
  }
};



export const remove = async (id) => {
  try {
    return await Recipe.query().deleteById(id);
  } catch (error) {
    throw error;
  }
};

export const FavouriteRecipes = async (queryString) => {
  try {
    const allRecipes = await Recipe.query(queryString);
    
    const favoriteRecipes = allRecipes.filter(recipe => recipe.isFavorite === true);

    return favoriteRecipes;
  } catch (error) {
    throw error;
  }
}



export const searchRecipes = async (searchTerm) => {
  try {
    const recipes = await Recipe.query().where('name', 'ilike', `%${searchTerm}%`);
    return recipes;
  } catch (error) {
    throw error;
  }
};

export const getRecipeSummary = async (recipeId) => {
  try {
    return await Recipe.getSummary(recipeId);
  } catch (error) {
    throw error;
  }
};

export const getFavouriteRecipesByIDs = async (ids) => {
  try {
    return await Recipe.getFavouritesByIds(ids);
  } catch (error) {
    throw error;
  }
};