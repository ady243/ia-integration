import {Model} from "objection";
import User from "./User.js";
import Like from "./Like.js";

export default class Post extends Model {
    static tableName = "posts";

    static relationMappings = {
        author: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: "posts.authorId",
                to: "users.id",
            }
        },
        likes: {
            relation: Model.HasManyRelation,
            modelClass: Like,
            join: {
                from: "posts.id",
                to: "likes.postId",
            }
        }
    }

    // add number of likes to the post
    async $afterGet(context) {
        await super.$afterGet(context);
        // check if likes exist
        if (!this.likes) {
            return;
        }
        this.likesCount = this.likes.length;
    }

    $formatJson(json) {
        json = super.$formatJson(json)
        delete json.likes
        return json
    }
}