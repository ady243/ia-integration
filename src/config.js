import "dotenv/config";

export default {
  port: process.env.PORT || 3001,
  db: {
    client: process.env.DB_CLIENT || "pg",

    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "auth_user",
      port: process.env.DB_PORT || 5432,
      password: process.env.DB_PASSWORD || "rootme",
      database: process.env.DB_DATABASE || "auth_db",
    },
    migrations: {
      directory: "./src/db/migrations",
    },
    modelPaths: {
      directory: "./src/db/models",
    }
  },
  security: {
    password: {
      pepper: process.env.SECURITY_PASSWORD_PEPPER || "pepper",
      interation: 1000,
      Keylen: 128,
      digest: "sha512",
    },
    session: {
      secret: "secret",
      expiresIn: "1h",
    },
   
  },
};
