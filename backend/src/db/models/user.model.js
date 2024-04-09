import { Model } from "objection"

class User extends Model {
  static tableName = "users"

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName", "lastName", "email", "passwordHash", "passwordSalt"],

      properties: {
        id: { type: "integer" },
        fullName: { type: "string", minLength: 1, maxLength: 255 },
        firstName: { type: "string", minLength: 1, maxLength: 255 },
        lastName: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string", minLength: 1, maxLength: 255 },
        passwordHash: { type: "string" },
        passwordSalt: { type: "string" },
      },
    }
  }

  $formatJson(json) {
    json = super.$formatJson(json)
    delete json.passwordHash
    delete json.passwordSalt
    return json
  }
}

export default User
