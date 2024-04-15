import faker from "faker"
import { hashPassword } from "../../security/password/index.js"


const makeUserPasswordHashAndSalt = (user) => {
  const [passwordHash, passwordSalt] = hashPassword(user.password)

  delete user.password

  return {
    ...user,
    passwordHash,
    passwordSalt,
  }
} 

const createInitialUsers = () => {
  const initialUsers = [
    {
      fullName: "adminfullName",
      email: "admin@gmail.com",
      password: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {

      fullName: "authorfullName",
      email: "author@gmail.com",
      password: "author",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fullName: "userfullName",
      email: "user@gmail.com",
      password: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  const users = initialUsers.map((user) => makeUserPasswordHashAndSalt(user))

  return users
}

const createFakeUser = () => {
  const [passwordHash, passwordSalt] = hashPassword(faker.internet.password())

  return {
    fullName: faker.internet.userName(),
    email: faker.internet.email(),
    passwordHash,
    passwordSalt,
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del()
  const fakeUsers = []
  const desiredUsers = 10
  for (let i = 0; i < desiredUsers; i++) {
    fakeUsers.push(createFakeUser())
  }

  const users = [...createInitialUsers(), ...fakeUsers]

  await knex("users").insert(users)
}
