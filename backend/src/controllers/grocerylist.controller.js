
import { generateGroceryList } from "../services/grocerylist.services.js";

export const generateGrocerylist = async (req, res, next) => {
    try {
        const { recipeId } = req.params;

        const groceryList = await generateGroceryList(recipeId);

        res.status(200).json(groceryList);
    } catch (error) {
        next(error);
    }
}