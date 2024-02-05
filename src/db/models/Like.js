import {Model} from "objection";
import User from "./User.js";

export default class Like extends Model {
    static tableName = "likes";

    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: "likes.userId",
                to: "users.id",
            }
        },
        post: {
            relation: Model.BelongsToOneRelation,
            modelClass: 'Post',
            join: {
                from: "likes.postId",
                to: "posts.id",
            }
        }
    }

}