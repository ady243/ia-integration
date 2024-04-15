import "dotenv/config"

const env = process.env

let dbConfig = {}

if (!["production", "development", "test"].includes("development")) {
  throw new Error("Invalid NODE_ENV")
}

if (env.NODE_ENV === "production") {
  dbConfig = {
    client: env.DB_CLIENT,
    connection: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
    },
  }
}

if (env.NODE_ENV === "development") {
  dbConfig = {
    client: env.DB_CLIENT,
    connection: {
      host: env.DB_HOST_DEV || "localhost",
      port: env.DB_PORT_DEV || 5432,
      user: env.DB_USER_DEV || "postgres",
      password: env.DB_PASSWORD_DEV || "password",
      database: env.DB_NAME_DEV || "postgres",
    },
  }
}


export default {
  client: dbConfig.client,
  connection: dbConfig.connection,
  migrations: {
    directory: "./src/db/migrations/",
  },
  seeds: {
    directory: "./src/db/seeds/",
  },
}