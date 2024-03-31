import Allergy from "../db/models/allergy.model.js";
import AppError from "../utils/appError.js";
import APIFeatures from "../utils/apiFeatures.js"

export const findOneByField = async (field, value) => {
  const allergy = await Allergy.query().findOne({ [field]: value });
  return allergy;
};

export const findAllByUserId = async (userId) => {
  try {
    const allergies = await Allergy.query().findOne({
      user_id: userId
    });

    if (!allergies) {
      return []
    }

    return allergies;
  } catch (error) {
    throw error;
  }
};

export const findAll = async (queryString) => {
  try {
    const features = new APIFeatures(Allergy.query(), queryString)
      .limit()
      .sort()
      .paginate();

    const allergies = await features.query;
    return allergies;
  } catch (error) {
    throw error;
  }
};

export const createOne = async (data) => {
  try {
    // const isAllergyExist = await findOneByField("allergen", data?.allergen);
    //
    // if (isAllergyExist) {
    //   throw new AppError(409, "fail", "Allergy already exist");
    // }

    return Allergy.query().insert({
        allergen: data.allergen,
        user_id: data.user_id
    });
  } catch (error) {
    throw error;
  }
};

export const findOneById = async (allergyId) => {
  try {
    const allergy = await Allergy.query().findById(allergyId);
    if (!allergy) {
      throw new AppError(404, "fail", "No allergy found with that id");
    }
    return allergy;
  } catch (error) {
    throw error;
  }
};

export const updateOneWithPatch = async (allergyId, allergy) => {
  try {
    await findOneById(allergyId);

    const newAllergy = await Allergy.query().patchAndFetchById(allergyId, allergy);
    return newAllergy;
  } catch (error) {
    throw error;
  }
};

export const deleteOne = async (allergyId) => {
  try {
    const allergy = await findOneById(allergyId);

    await allergy.$query().delete();
  } catch (error) {
    throw error;
  }
};