import * as userService from "../services/user.service.js"

import AppError from "../utils/appError.js"
import { checkRequiredFields } from "../utils/tools.js"

export const getAllUsers = async (req, res, next) => {
  try {
    const {
      session: {
        user: { id: currentUserId },
      },
    } = req

    const users = await userService.findAll(req.query)
    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}

export const signInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const missingFields = checkRequiredFields({ email, password }, [
      "email",
      "password",
    ])

    if (missingFields.length > 0) {
      throw new AppError(
        400,
        "fail",
        `${missingFields.join(", ")} are required`
      )
    }

    const [user, token] = await userService.signIn(email, password)

    res.status(200).json({
      user,
      token,
    })
  } catch (error) {
    next(error)
  }
}

export const createUser = async (req, res, next) => {
  const { fullName, email, password, createdAt, updatedAt } = req.body

  const datas = {
    fullName,
    email,  
    password,
    createdAt: createdAt || new Date(),
    updatedAt: updatedAt || new Date(),
  }
  try {
    const missingFields = checkRequiredFields(datas, [
      "fullName",
      "email",
      "password",
    ])

    if (missingFields.length > 0) {
      throw new AppError(
        400,
        "fail",
        `${missingFields.join(", ")} are required`
      )
    }

    const user = await userService.createOne(datas)
    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}

export const getUser = async (req, res, next) => {
  try {
    const {
      params: { id: userId },
      session: {
        user: { id: currentUserId },
      },
    } = req

    if (!userId || !Number(userId)) {
      throw new AppError(404, "fail", "Missing user id")
    }

    const user = await userService.findOneById(userId)

    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

export const getCurrentUser = async (req, res, next) => {
  try {
    const {
      session: {
        user: { id: currentUserId },
      },
    } = req

    const user = await userService.findOneById(currentUserId)

    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

export const updateUser = async (req, res, next) => {
  try {
    const {
      params: { id: userId },
      body: { fullName, email, updatedAt },
      session: {
        user: { id: currentUserId },
      },
    } = req

    const datas = {
      fullName,
      email,
      updatedAt: updatedAt || new Date(),
    }

    if (!userId || !Number(userId)) {
      throw new AppError(404, "fail", "Missing user id")
    }

    const user = await userService.updateOneWithPatch(userId, datas)

    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const {
      params: { id: userId },
      session: {
        user: { id: currentUserId },
      },
    } = req

    if (!userId || !Number(userId)) {
      throw new AppError(404, "fail", "Missing user id")
    }

    await userService.deleteOne(userId)

    res.status(200).send({
      status: "success",
      statusCode: 200,
      message: "User deleted",
    })
  } catch (error) {
    next(error)
  }
}
