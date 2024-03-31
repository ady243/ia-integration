import * as allergyService from "../services/allergy.services.js"
import AppError from "../utils/appError.js"
import { checkRequiredFields } from "../utils/tools.js"

// Utilisation d'une fonction pour vérifier l'ID de l'allergie
const checkAllergyId = (allergyId) => {
  if (!allergyId || !Number(allergyId)) {
    throw new AppError(404, "fail", "Missing allergy id")
  }
}

export const getAllAllergies = async (req, res, next) => {
  try {
    const allergies = await allergyService.findAll(req.query)
    res.status(200).json(allergies)
  } catch (error) {
    next(error)
  }
}

export const createAllergy = async (req, res, next) => {
  const { allergen } = req.body
  const { user: {
    id: userCurrentId
  } } = req.session;

  const datas = {
    allergen,
  }

  try {
    const missingFields = checkRequiredFields(datas, ["allergen"])

    if (missingFields.length > 0) {
      throw new AppError(400, "fail", `${missingFields.join(", ")} are required`)
    }


    const allergy = await allergyService.createOne({
        ...datas,
        user_id: userCurrentId
    })


    res.status(201).json(allergy)
  } catch (error) {
    next(error)
  }
}

export const getAllergy = async (req, res, next) => {
  try {
    const { params: { id: allergyId } } = req

    checkAllergyId(allergyId)

    const allergy = await allergyService.findOneById(allergyId)
    res.status(200).json(allergy)
  } catch (error) {
    next(error)
  }
}

export const updateAllergy = async (req, res, next) => {
  try {
    const { params: { id: allergyId }, body: { allergen } } = req

    checkAllergyId(allergyId)

    const datas = {
      allergen,
    }

    const allergy = await allergyService.updateOneWithPatch(allergyId, datas)
    res.status(200).json(allergy)
  } catch (error) {
    next(error)
  }
}

export const deleteAllergy = async (req, res, next) => {
  try {
    const { params: { id: allergyId } } = req

    checkAllergyId(allergyId)

    await allergyService.deleteOne(allergyId)
    res.status(200).send({
      status: "success",
      statusCode: 200,
      message: "Allergy deleted",
    })
  } catch (error) {
    next(error)
  }
}

export const getAllergiesByUserId = async (req, res, next) => {
  try {
    const { params: {
       userId 
      } 
    } = req.session;

    if (!userId || !Number(userId)) {
      throw new AppError(404, "fail", "Missing user id");
    }

    const allergies = await allergyService.findAllByUserId(userId);

    //console.log("Allergies : ", allergies.map(objet => objet.allergen).join(", ")); 
    res.status(200).json(allergies.map(objet => objet.allergen));
  } catch (error) {
    next(error);
  }
}