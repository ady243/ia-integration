import express from "express"
import * as allergyController from "../controllers/allergy.controller.js"
import auth from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/allergy", allergyController.createAllergy)

router.route("/allergy").get(auth, allergyController.getAllAllergies)
router
  .route("/:id")
  .get(auth, allergyController.getAllergy)
  .put(auth, allergyController.updateAllergy)
  .delete(auth, allergyController.deleteAllergy)

export default router