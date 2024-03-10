import express from "express"
import * as sideDishController from "../controllers/sidedish.controller.js"

const router = express.Router()


router.post("/", sideDishController.generateSidedish)

export default router;
