import cors from "cors";
import config from "./config.js";
import express from "express";
import knex from "knex";
import { Model } from "objection";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
import favoriRoute from "./routes/favoris.js";

const app = express();
const db = knex(config.db);
Model.knex(db);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
userRoute({ app, db });
postRoute({ app, db });
favoriRoute({app, db})
app.listen(config.port, () => console.log(`listening on:${config.port}`));

export default config;