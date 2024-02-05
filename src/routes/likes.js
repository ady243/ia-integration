import Post from "../db/Models/Post.js";
import auth from "../middlewares/auth.js";


const likeRoute = ({ app }) => {

    app.post("/posts/:postId/likes/toggle", auth, async (req, res) => {
        const { userId } = req.session;
        const { postId } = req.params;

        const post = await Post.query().findById(postId).withGraphFetched('likes');

        if (!post) {
            res.status(404).send({ error: "Post not found" });
            return;
        }

        // check if user already liked the post and toggle like
        const like = await post.$relatedQuery('likes').findOne({ userId });
        if (like) {
            await post.$relatedQuery('likes').deleteById(like.id);
            res.json({ deleted: true });
            return;
        }

        // create like
        const newLike = await post.$relatedQuery('likes').insert({ userId });

        res.json(newLike);
    }
    );

};

export default likeRoute;