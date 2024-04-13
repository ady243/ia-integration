import faker from "faker";
import { hashPassword } from "../../security/password/index.js";
import { getRandomRole } from "../../utils/tools.js";
import Recipe from "../models/recipe.model.js";


const createFakeRecipes = () => {
    const recipes = [];
  
    for (let i = 0; i < 30; i++) {
        const name = faker.lorem.words(3);
        const description = faker.lorem.sentence();
        const ingredients = Array.from({ length: 9 }, () => faker.lorem.word()); // Generate array of 9 random words
        const instructions = faker.lorem.paragraphs(); // Generate array of 9 random sentences
        const duration = faker.datatype.number({ min: 10, max: 120 });
        const isFavorite = faker.datatype.boolean();
        const imageUrl = faker.image.food();
    
        const recipe = {
          name,
          description,
          ingredients,
          isFavorite,
          duration,
          instructions,
          imageUrl,
        };
    
        recipes.push(recipe);
      }
  
    return recipes;
  };
  
  // Fonction de seed qui utilise l'instance knex passée en argument
  export async function seed(knex) {
    try {
      // Supprimer toutes les recettes existantes
      await knex("recipes").del();
  
      // Liée le modèle Recipe à l'instance knex
      Recipe.knex(knex);
  
      const fakeRecipes = createFakeRecipes();
  
      // Insérer les recettes fictives dans la base de données en utilisant le modèle Recipe
      await Recipe.query().insert(fakeRecipes);
      console.log("Seed completed successfully.");
    } catch (error) {
      console.error("Error while seeding:", error.message);
    }
  }