import { generateSideDish } from "../services/sidedish.services.js";

export const generateSidedish = async (req, res, next) => {
    try {

        const { recipeId } = req.params;

        const sideDish = await generateSideDish(recipeId);
        
        res.status(200).json(sideDish);
    } catch (error) {
        next(error);
    }
}
