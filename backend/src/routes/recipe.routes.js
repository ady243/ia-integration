import express from "express"
import * as recipeController from "../controllers/recipe.controller.js"


const router = express.Router()

router.get("/", recipeController.getAllRecipes)
// router.post("/recipes", auth, recipeController.createRecipe)
router.post("/", recipeController.createRecipe);
router.get("/:id", recipeController.getRecipeById);
router.put("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe);

router.get("/suggestions", recipeController.getSuggestedRecipe);
    

export default router
