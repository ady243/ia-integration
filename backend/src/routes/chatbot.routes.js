import express from "express"
import * as chatbotController from "../controllers/chatbot.controller.js"
import auth from "../middlewares/auth.middleware.js"

const router = express.Router()

router.get("/", auth, chatbotController.conversation)

export default router
