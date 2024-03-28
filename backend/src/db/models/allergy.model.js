import { Model } from "objection";
import User from "./user.model.js";

class Allergy extends Model {
  static tableName = "allergy";

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        allergen: { type: "string" },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'allergies.user_id',
          to: 'users.id'
        }
      }
    };
  }
}

export default Allergy;