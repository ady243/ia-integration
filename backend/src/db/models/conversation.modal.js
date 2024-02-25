import { Model } from "objection"
import User from "./user.model.js"
import Message from "./message.model.js"

class Conversation extends Model {
  static tableName = "conversations"

  static get jsonSchema() {
    return {
      type: "object",
      required: ["user_id", "created_at"],
      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        created_at: { type: "string"},
      },
    }
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "conversations.user_id",
          to: "users.id",
        },
      },
      messages: {
        relation: Model.HasManyRelation,
        modelClass: Message,
        join: {
          from: "conversations.id",
          to: "messages.conversation_id",
        },
      },
    }
  }
}

export default Conversation
