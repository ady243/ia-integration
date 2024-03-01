import Allergy from "../db/models/Allergy.js";
import AppError from "../utils/appError.js";

export const findOneByField = async (field, value) => {
  const allergy = await Allergy.query().findOne({ [field]: value });
  return allergy;
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

export const createOne = async (allergy) => {
  try {
    const isAllergyExist = await findOneByField("allergen", allergy.allergen);

    if (isAllergyExist) {
      throw new AppError(409, "fail", "Allergy already exist");
    }

    return Allergy.query().insert(allergy);
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