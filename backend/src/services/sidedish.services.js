import OpenAI from 'openai';
import * as recipeService from "../services/recipe.service.js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateSideDish = async (recipeId) => {

    const recipe = await recipeService.getRecipeById(recipeId);
    try {
        const messages = [
            {
                role: 'system',
                content:
                    "Vous allez devoir recommandé du vin, des desserts ou des fromages en rapport avec la recette sans description . Vous avez une connaissance approfondie de toutes les cuisines du monde, vous ne traitez pas d'autres sujets autres que la cuisine",
            },
            { role: 'user',
                content: `Je recherche les accompagnements pour la recette "${recipe.name}".` },
        ];

        const completion = await openai.chat.completions.create({
            messages: messages,
            model: 'gpt-3.5-turbo',
        });

        const response = completion.choices[0].message.content

        return { response };
    } catch (error) {
        throw error;
    }
};
