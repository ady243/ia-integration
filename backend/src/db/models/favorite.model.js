import { Model } from "objection"
import User from "./user.model.js"
import Recipe from "./recipe.model.js"


class Favorite extends Model {
  static tableName = "favorites"

  static get jsonSchema() {
    return {
      type: "object",
      required: ["user_id", "recipe_id"],

      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        recipe_id: { type: "integer" },
      },
    }
  }

  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "favorites.user_id",
        to: "users.id"
      }
    },
    recipe: {
      relation: Model.BelongsToOneRelation,
      modelClass: Recipe,
      join: {
        from: "favorites.recipe_id",
        to: "recipes.id"
      }
    }
  }
}

export default Favorite;