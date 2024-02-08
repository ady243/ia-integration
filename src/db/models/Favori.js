import {Model} from "objection";
import User from "./User.js";

export default class Favori extends Model {
    static tableName = "favoris";

    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: "favoris.userId",
                to: "users.id",
            }
        },
        post: {
            relation: Model.BelongsToOneRelation,
            modelClass: 'Post',
            join: {
                from: "favoris.postId",
                to: "posts.id",
            }
        }
    }

}