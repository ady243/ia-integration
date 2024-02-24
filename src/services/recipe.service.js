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
}