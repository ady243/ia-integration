import OpenAI from 'openai';
import * as recipeModel from "../db/models/recipe.model.js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateSideDish = async () => {

    const recipes = [
        "nem",
        "pondu",
        "fufu"
    ]
    try {
        // Inclure un message de système avec le contexte désiré
        const messages = [
            {
                role: 'system',
                content:
                    "Vous allez devoir recommandé du vin, des desserts ou des fromages en rapport avec la recette . Vous avez une connaissance approfondie de toutes les cuisines du monde, vous ne traitez pas d'autres sujets autres que la cuisine",
            },
            { role: 'user',
                content: `Je recherche des accompagnements pour cette "${recipes.join(",")}".` }, // Message de recherche de recette
        ];

        // Demander une complétion à l'API OpenAI
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
