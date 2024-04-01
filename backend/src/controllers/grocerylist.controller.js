import { generateGroceryList } from "../services/grocerylist.services.js";

export const generateGrocerylist = async (req, res, next) => {
    try {

        const sideDish = await generateGroceryList();
        res.status(200).json(sideDish);
    } catch (error) {
        next(error);
    }
}
