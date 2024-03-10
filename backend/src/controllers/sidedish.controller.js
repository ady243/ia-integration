import { generateSideDish } from "../services/sidedish.services.js";

export const generateSidedish = async (req, res, next) => {
    try {

        const sideDish = await generateSideDish();
        res.status(200).json(sideDish);
    } catch (error) {
        next(error);
    }
}
