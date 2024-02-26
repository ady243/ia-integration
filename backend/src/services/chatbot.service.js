import OpenAI from "openai"
import Message from "../db/models/message.model.js"

const env = process.env
const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

export const startChat = async (message, conversationId) => {
  try {
    // Inclure un message de système avec le contexte désiré
    const messages = [
      {
        role: "system",
        content:
          "Vous êtes un grand chef cuisinier. Vous avez une connaissance approfondie de toutes les cuisines du monde.",
      },
      { role: "user", content: message },
    ]

    const completion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
    })

    const role = completion.choices[0].message.role
    const content = completion.choices[0].message.content
    // save the message in the database
    const userMessageCreated = await Message.query().insert({
      role: "user",
      content: message,
      conversation_id: conversationId,
      created_at: new Date().toISOString(),
    })

    const chatbotMessageCreated = await Message.query().insert({
      role,
      content,
      conversation_id: conversationId,
      created_at: new Date().toISOString(),
    })

    return { userMessageCreated, chatbotMessageCreated }
  } catch (error) {
    throw error
  }
}

export const continueChat = async (
  newMessage,
  conversationHistory = [],
  conversationId
) => {
  try {
    // Ajouter le nouveau message de l'utilisateur à l'historique de la conversation
    conversationHistory.push({ role: "user", content: newMessage })

    // Créer une conversation avec l'historique complet, y compris le nouveau message
    const completion = await openai.chat.completions.create({
      messages: conversationHistory,
      model: "gpt-3.5-turbo",
    })

    // Extraire la réponse de l'IA
    const response = completion.choices[0].message.content

    // Ajouter la réponse de l'IA à l'historique pour la prochaine itération
    conversationHistory.push({ role: "assistant", content: response })

    // Sauvegarder les nouveaux messages dans la base de données
    const userMessageCreated = await Message.query().insert({
      role: "user",
      content: newMessage,
      conversation_id: conversationId,
      created_at: new Date().toISOString(),
    })

    const chatbotMessageCreated = await Message.query().insert({
      role: "assistant",
      content: response,
      conversation_id: conversationId,
      created_at: new Date().toISOString(),
    })

    // Retourner la réponse et l'historique mis à jour pour un suivi
    return { response, conversationHistory }
  } catch (error) {
    throw error
  }
}
