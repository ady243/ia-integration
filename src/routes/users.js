import User from "../db/Models/User.js";
import hashPassword from "../hashPassword.js";
import jsonwebtoken from "jsonwebtoken";
import config from "../config.js";

const userRoute = ({ app }) => {
  
  const restrictToAdmin = (req, res, next) => {
    const { user } = req;
    if (!user || user.role !== "admin") {
        res.status(403).send({ error: "Unauthorized" });
        return;
    }
    next();
  };
  app.post("/register", async (req, res) => {
    const {
      body: { username, email, password },
    } = req;

    if (!username || !email || !password) {
        res.status(400).send({ error: "Missing fields" });
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).send({ error: "Invalid email" });
        return;
    }

    const user = await User.query().findOne({ email });

    if (user) {
      res.status(401).send({ error: "Email user already exists" });

      return;
    }

    const [passwordHash, passwordSalt] = hashPassword(password);
    const users = await User.query().insertAndFetch({
        username,
        email,
        passwordHash,
        passwordSalt,
        });
      res.send(users);

  });


   
 
  app.get("/users", restrictToAdmin, async (req, res) => {
    const users = await User.query().select("id", "username", "email" );
    res.send(users);
  });

  app.post("/login", async (req, res) => {
    const {
      body: { email, password },
    } = req;

    if (!email || !password) {
        res.status(400).send({ error: "Missing fields" });
        return;
    }

    const usager = await User.query().findOne({ email });
    if (!usager) {
      res.status(401).send({ error: "Invalid e-mail or password" });
      return;
    }

    const [passwordHash] = hashPassword(password, usager.passwordSalt);
    if (passwordHash !== usager.passwordHash) {
      res.status(401).send({ error: "Invalid e-mail or password" });
      return;
    }

    const security =  config.security.session.secret;
    const jwt = jsonwebtoken.sign(
      { payload: {
        userId: usager.id,
        username: usager.username
      } },
       security,
      { expiresIn: config.security.session.expiresIn }
    );
    res.send({
      token: jwt,
      user: {
        id: usager.id,
        username: usager.username
      },
    });
  });
};

export default userRoute;
