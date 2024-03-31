import express from "express"
import * as allergyController from "../controllers/allergy.controller.js"
import auth from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/", auth, allergyController.createAllergy)

router.get("/allergy", allergyController.getAllergy)

router.get("/getAllAllergies", auth, allergyController.getAllAllergies)

router.get("/getAllAllergiesByUser/:userId", auth, allergyController.getAllergiesByUserId)

export default router