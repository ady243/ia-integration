import express from "express"
import * as recipeController from "../controllers/recipe.controller.js"
import auth from "../middlewares/auth.middleware.js"

const router = express.Router()

router.get("/", recipeController.getAllRecipes)
// router.post("/recipes", auth, recipeController.createRecipe)

export default router
