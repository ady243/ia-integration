import jsonwebtoken from "jsonwebtoken"
import config from "../config/config.js"
import User from "../db/models/user.model.js"

import APIFeatures from "../utils/apiFeatures.js"
import AppError from "../utils/appError.js"

import { hashPassword, comparePassword } from "../security/password/index.js"
import { securityHelper } from "../utils/tools.js"

export const findOneByField = async (field, value) => {
  const user = await User.query().findOne({ [field]: value })
  return user
}

export const findAll = async (queryString) => {
  try {
    const features = new APIFeatures(User.query(), queryString)
      .limit()
      .sort()
      .paginate()

    const users = await features.query
    return users
  } catch (error) {
    throw error
  }
}

export const signIn = async (email, password) => {
  try {
    if (!securityHelper.emailRegex.test(email)) {
      throw new AppError(400, "fail", "Invalid email format")
    }

    if (password.length < securityHelper.passwordLengthMin) {
      throw new AppError(
        400,
        "fail",
        `Password must be at least ${securityHelper.passwordLengthMin} characters`
      )
    }

    const user = await findOneByField("email", email)

    if (!user) {
      throw new AppError(401, "fail", "Invalid email or password")
    }

    const isPasswordValid = comparePassword(
      password,
      user.passwordHash,
      user.passwordSalt
    )

    if (!isPasswordValid) {
      throw new AppError(401, "fail", "Invalid email or password")
    }

    const token = jsonwebtoken.sign(
      {
        payload: {
          user: { id: user.id},
        },
      },
      config.security.session.secret,
      { expiresIn: config.security.session.expireAfter }
    )

    return [user, token]
  } catch (error) {
    throw error
  }
}

export const createOne = async (user) => {
  try {
    if (!securityHelper.emailRegex.test(user.email)) {
      throw new AppError(400, "fail", "Invalid email format")
    }

    const isUserExist = await findOneByField("email", user.email)

    if (isUserExist) {
      throw new AppError(409, "fail", "Email already exist")
    }

    if (!securityHelper.passwordRegex.test(user.password)) {
      throw new AppError(400, "fail", securityHelper.passwordError)
    }

    const [passwordHash, passwordSalt] = hashPassword(user.password)

    user.passwordHash = passwordHash
    user.passwordSalt = passwordSalt

    delete user.password

    return User.query().insert(user)
  } catch (error) {
    throw error
  }
}

export const findOneById = async (userId) => {
  try {
    const user = await User.query().findById(userId)
    if (!user) {
      throw new AppError(404, "fail", "No user found with that id")
    }
    return user
  } catch (error) {
    throw error
  }
}

export const updateOneWithPatch = async (userId, user) => {
  try {
    await findOneById(userId)

    if (user.email) {
      if (!securityHelper.emailRegex.test(user.email)) {
        throw new AppError(400, "fail", "Invalid email format")
      }

      const userWithSameEmail = await findOneByField("email", user.email)

      if (userWithSameEmail && userWithSameEmail.id !== Number(userId)) {
        throw new AppError(409, "fail", "Email already exist")
      }
    }

    const newUser = await User.query().patchAndFetchById(userId, user)
    return newUser
  } catch (error) {
    throw error
  }
}

export const deleteOne = async (userId) => {
  try {
    const user = await findOneById(userId)

    await user.$query().delete()
  } catch (error) {
    throw error
  }
}
