import { Model } from "objection"
import Conversation from "./conversation.modal.js"

class Message extends Model {
  static tableName = "messages"

  static get jsonSchema() {
    return {
      type: "object",
      required: ["conversation_id", "role", "content"],
      properties: {
        id: { type: "integer" },
        conversation_id: { type: "integer" },
        role: { type: "string" },
        content: { type: "string" },
        created_at: { type: "string" },
      },
    }
  }

  static get relationMappings() {
    return {
      conversation: {
        relation: Model.BelongsToOneRelation,
        modelClass: Conversation,
        join: {
          from: "messages.conversation_id",
          to: "conversations.id",
        },
      },
    }
  }
}

export default Message
