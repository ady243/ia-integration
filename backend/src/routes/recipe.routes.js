import express from "express"
import * as recipeController from "../controllers/recipe.controller.js"


const router = express.Router()

// router.post("/recipes", auth, recipeController.createRecipe)
router.get("/:id", recipeController.getRecipeById);
router.put("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe);
router.get("/", recipeController.getAllRecipes)
router.post("/", recipeController.createRecipe);

router.get("/favourite",recipeController.getFavouriteRecipes);
router.get("/suggestions", recipeController.getSuggestedRecipe);
router.get("/search",recipeController.searchRecipes);
router.get("/:recipeId/summary",recipeController.getRecipeSummary);
router.post("/favourite",recipeController.addFavouriteRecipe);

router.delete("/:id/favourite",recipeController.removeFavouriteRecipe);

export default router
