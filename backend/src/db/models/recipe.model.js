import { Model } from "objection"

class Recipe extends Model {
  static tableName = "recipes"

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "description", "isFavorite","method"],

      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        description: { type: "string", minLength: 1, maxLength: 255 },
        isFavorite: { type: "boolean" },
        method: { type: "string", minLength: 1 } 
      },
    }
  }
}

export default Recipe
