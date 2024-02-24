import * as recipeService from "../services/recipe.service.js"

import AppError from "../utils/appError.js"

export const getAllRecipes = async (req, res, next) => {
  try {
    const users = await recipeService.findAll(req.query)
    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}
