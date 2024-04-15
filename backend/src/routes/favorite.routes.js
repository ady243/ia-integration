import express from "express"
import * as favoriteController from "../controllers/favorite.controller.js"
import auth from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/", auth, favoriteController.toggleFavorite)
router.delete("/:id", auth, favoriteController.unToggleFavorite)
router.get("/:id", auth, favoriteController.getUserFavorites)
router.get("/all", auth, favoriteController.getAllUserFavorites)    

export default router