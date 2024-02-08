import {Model} from "objection";
import User from "./User.js";
import Favori from "./Favori.js";

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
            modelClass: Favori,
            join: {
                from: "posts.id",
                to: "favoris.postId",
            }
        }
    }

    // add number of favoris to the post
    async $afterGet(context) {
        await super.$afterGet(context);
        // check if favoris exist
        if (!this.favoris) {
            return;
        }
        this.favorisCount = this.favoris.length;
    }

    $formatJson(json) {
        json = super.$formatJson(json)
        delete json.favoris
        return json
    }
}