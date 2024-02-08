import Post from "../db/Models/Post.js";


const postRoute = ({ app }) => {

    app.get("/posts/:id", async (req, res) => {
        const { id } = req.params;

        const post = await Post.query().findById(id).withGraphFetched('favoris') ;
        if (!post) {
            res.status(404).send({ error: "Post not found" });
            return;
        }

        res.send(post);
    });

   app.get("/posts", async (req, res) => {
        const posts = await Post.query().withGraphFetched('favoris');
        res.send(posts);
    }
    );

};

export default postRoute;