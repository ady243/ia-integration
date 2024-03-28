import faker from "faker";
import { getRandomRole } from "../../utils/tools.js";

// Fonction pour générer une recette factice
const createFakeRecipe = () => {
  return {
    name: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    method: faker.lorem.paragraphs(3), // Ajout de la méthode
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    // Ajoutez d'autres propriétés de recette selon vos besoins
  };
};

// Fonction pour créer des recettes initiales
const createInitialRecipes = () => {
  const initialRecipes = [
    {
      name: "First Recipe",
      description: "This is the first recipe",
      method: "This is the method for the first recipe", // Ajout de la méthode
      createdAt: new Date(),
      updatedAt: new Date(),
      // Ajoutez d'autres propriétés de recette selon vos besoins
    },
    {
      name: "Second Recipe",
      description: "This is the second recipe",
      method: "This is the method for the second recipe", // Ajout de la méthode
      createdAt: new Date(),
      updatedAt: new Date(),
      // Ajoutez d'autres propriétés de recette selon vos besoins
    },
    // Ajoutez d'autres recettes initiales si nécessaire
  ];

  return initialRecipes;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Supprimer toutes les entrées existantes
  await knex("recipes").del();

  const fakeRecipes = [];
  const desiredRecipes = 10;
  for (let i = 0; i < desiredRecipes; i++) {
    fakeRecipes.push(createFakeRecipe());
  }

  const recipes = [...createInitialRecipes(), ...fakeRecipes];

  // Insérer les recettes dans la table "recipes"
  await knex("recipes").insert(recipes);
}
