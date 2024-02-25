import Conversation from "../db/models/conversation.modal.js"

import APIFeatures from "../utils/apiFeatures.js"

export async function getMessages(conversationId) {
  try {
    return await Conversation.relatedQuery("messages").for(conversationId)
  } catch (error) {
    throw error
  }
}

export async function create(data) {
  try {
    return await Conversation.query().insert(data)
  } catch (error) {
    throw error
  }
}

export const findOneByField = async (field, value) => {
  return Conversation.query().findOne({ [field]: value })
}

export const findAll = async (queryString) => {
  try {
    const features = new APIFeatures(Conversation.query(), queryString)
      .limit()
      .sort()
      .paginate()

    return await features.query
  } catch (error) {
    throw error
  }
}

export const findAllByUserId = async (userId) => {
  try {
    return await Conversation.query().where("user_id", userId)
  } catch (error) {
    throw error
  }
}
