import express from "express";
import * as recipeController from "../controllers/recipe.controller.js";

const router = express.Router();

router.get("/:id", recipeController.getRecipeById);
router.put("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe);
router.get("/suggestions", recipeController.getSuggestedRecipe);
router.post("/", recipeController.createRecipe);
router.get("/", recipeController.getAllRecipes);

router.get("/search",recipeController.searchRecipes);
router.get("/:recipeId/summary",recipeController.getRecipeSummary);
router.post("/favourite",recipeController.addFavouriteRecipe);
router.get("/favourite",recipeController.getFavouriteRecipes);
router.delete("/favourite",recipeController.removeFavouriteRecipe);


export default router;
