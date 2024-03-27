import * as recipeService from "../services/recipe.service.js"


export const getAllRecipes = async (req, res, next) => {
  try {
    const users = await recipeService.findAll(req.query)
    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}

export const getSuggestedRecipe = async (req, res) => {
  try {
    const searchTerm = req.query.search;
    const recipes = await recipeService.getSuggestedRecipe(searchTerm);
    res.json({ recipes });
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createRecipe = async (req, res, next) => {
  try {
    const newRecipe = await recipeService.create(req.body)
    res.status(201).json(newRecipe)
  } catch (error) {
    next(error)
  }
}


export const getRecipeById = async (req, res, next) => {
  try {
    const recipe = await recipeService.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};

export const updateRecipe = async (req, res, next) => {
  try {
    const updatedRecipe = await recipeService.update(req.params.id, req.body);
    res.status(200).json(updatedRecipe);
  } catch (error) {
    next(error);
  }
};

export const deleteRecipe = async (req, res, next) => {
  try {
    await recipeService.remove(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};



// export const getSuggestedRecipe = async (req, res) => {
//   try {
//     const searchTerm = req.query.search;
//     const recipes = await Recipe.query().where('name', 'ilike', `%${searchTerm}%`); // Requête pour récupérer toutes les recettes correspondantes
//     res.json({ recipes }); // Renvoyer toutes les recettes correspondantes
//   } catch (error) {
//     console.error('Error fetching recipes:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };