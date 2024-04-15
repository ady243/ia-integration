import express from "express"
import * as groceryListController from "../controllers/grocerylist.controller.js"

const router = express.Router()


router.post("/:recipeId", groceryListController.generateGrocerylist);

export default router;
