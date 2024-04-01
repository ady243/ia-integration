import express from "express"
import * as allergyController from "../controllers/allergy.controller.js"
import auth from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/", auth, allergyController.createAllergy)

router.get("/allergy",auth, allergyController.getAllergy)

router.get("/getAllAllergies", auth, allergyController.getAllAllergies)

router.get("/:userId", auth, allergyController.getAllergiesByUserId)

export default router