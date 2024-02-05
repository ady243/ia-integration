import { Model } from "objection";

class User extends Model {
  static tableName = "users";

  $formatJson(json) {
    json = super.$formatJson(json)
    delete json.passwordHash
    delete json.passwordSalt
    return json
  }
}

export default User;
