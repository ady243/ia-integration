import express from "express"
import * as chatbotController from "../controllers/chatbot.controller.js"
import auth from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/", auth, chatbotController.conversation)
router.get("/conversations", auth, chatbotController.getConversation)
router.delete("/conversations", auth, chatbotController.deleteConversation)

export default router
