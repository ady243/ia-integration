import { Model } from "objection";

class Allergy extends Model {
  static tableName = "allergies";

  static get jsonSchema() {
    return {
      type: "object",
      required: ["user_id", "allergen"],
      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        recipe_id: { type: ["integer", "null"] }, 
        allergen: { type: "string" },
      },
    };
  }

  static get relationMappings() {

    const User = require("./user.model");
    const Recipe = require("./recipe.model");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'allergies.user_id',
          to: 'users.id'
        }
      },
      recipe: {
        relation: Model.BelongsToOneRelation,
        modelClass: Recipe,
        join: {
          from: 'allergies.recipe_id',
          to: 'recipes.id'
        }
      }
    };
  }
}

export default Allergy;
