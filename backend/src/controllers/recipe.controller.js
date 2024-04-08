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

// export const createRecipe = async (req, res, next) => {
//   try {
//     const newRecipe = await recipeService.create(req.body)
//     res.status(201).json(newRecipe)
//   } catch (error) {
//     next(error)
//   }
// }

export const createRecipe = async (req, res) => {
  try {
    const { name, description, imageUrl , isFavorite } = req.body;

    // Créer une nouvelle recette
    const newRecipe = await Recipe.query().insert({
      name,
      description,
      isFavorite,
      imageUrl: imageUrl // Assurez-vous que le nom de la colonne correspond à votre table
    });

    res.status(201).json(newRecipe);
  } catch (error) {
    console.error('Erreur lors de la création de la recette :', error);
    res.status(500).json({ message: 'Erreur lors de la création de la recette' });
  }
};


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

export const searchRecipes = async (req, res) => {
  try {
    const searchTerm = req.query.search;
    const recipes = await Recipe.query().where('name', 'ilike', `%${searchTerm}%`);
    res.json(recipes);
  } catch (error) {
    console.error('Erreur lors de la recherche des recettes :', error);
    res.status(500).json({ message: 'Erreur lors de la recherche des recettes' });
  }
};


// export const searchRecipes = async (req, res, next) => {
//   try {
//     const results = await recipeService.searchRecipes(req.query.searchTerm, req.query.page);
//     res.json(results);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Oops, something went wrong" });
//   }
// };

export const getRecipeSummary = async (req, res, next) => {
  try {
    const results = await recipeService.getRecipeSummary(req.params.recipeId);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Oops, something went wrong" });
  }
};

export const addFavouriteRecipe = async (req, res, next) => {
  try {
    await recipeService.addFavouriteRecipe(req.body.recipeId);
    res.status(201).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Oops, something went wrong" });
  }
};

export const getFavouriteRecipes = async (req, res, next) => {

  try {
    const results = await recipeService.FavouriteRecipes(req.query);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Oops, something went wrong" });
  }

};

export const removeFavouriteRecipe = async (req, res, next) => {
  try {
    await recipeService.removeFavouriteRecipe(req.body.recipeId);
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Oops, something went wrong" });
  }
};

export const getRecipeSuggestions = async (req, res, next) => {
  try {
    const results = await recipeService.getRecipeSuggestions();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Oops, something went wrong" });
  }
};

export const getRecipeByCategory = async (req, res, next) => {
  try {
    const results = await recipeService.getRecipeByCategory(req.params.category);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Oops, something went wrong" });
  }
};