import { Model } from "objection"

class Recipe extends Model {
  static tableName = "recipes"

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "description", "isFavorite", "duration", "instructions", "imageUrl"],

      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        description: { type: "string", minLength: 1, maxLength: 255 },
        ingredients: { type: "array", items: { type: "string" } }, // Corrected definition for ingredients
        isFavorite: { type: "boolean" },
        duration: { type: "integer" },
        instructions: { type: "string", minLength: 1, maxLength: 4000 },
        imageUrl: { type: "string", minLength: 1, maxLength: 255 },
      },
    }
  }
}

export default Recipe;
