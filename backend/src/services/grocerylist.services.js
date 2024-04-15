import * as recipeService from "../services/recipe.service.js";
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateGroceryList = async (recipeId) => {
    try {
        const recipe = await recipeService.getRecipeById(recipeId);

        const messages = [
            {
                role: 'system',
                content:
                    "Vous allez devoir générer la liste de course en rapport avec la recette. Vous avez une connaissance approfondie de toutes les cuisines du monde, vous ne traitez pas d'autres sujets autres que la cuisine",
            },
            {
                role: 'user',
                content: `Je recherche la liste des courses pour la recette "${recipe.name}".`
            }
        ];


        const completion = await openai.chat.completions.create({
            messages: messages,
            model: 'gpt-3.5-turbo',
        });

        const response = completion.choices[0].message.content;

        return { response };
    } catch (error) {
        throw error;
    }
};
