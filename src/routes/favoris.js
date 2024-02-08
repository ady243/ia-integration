import Post from "../db/Models/Post.js";
import auth from "../middlewares/auth.js";


const favoriRoute = ({ app }) => {

    app.post("/posts/:postId/favoris/toggle", auth, async (req, res) => {
        const { userId } = req.session;
        const { postId } = req.params;

        const post = await Post.query().findById(postId).withGraphFetched('favoris');

        if (!post) {
            res.status(404).send({ error: "Post not found" });
            return;
        }

        // check if user already liked the post and toggle like
        const favori = await post.$relatedQuery('favoris').findOne({ userId });
        if (favori) {
            await post.$relatedQuery('favoris').deleteById(like.id);
            res.json({ deleted: true });
            return;
        }

        // create  new favori
        const newFav = await post.$relatedQuery('favoris').insert({ userId });

        res.json(newFav);
    }
    );

};

export default favoriRoute;