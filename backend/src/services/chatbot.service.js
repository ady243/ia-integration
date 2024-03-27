import OpenAI from "openai"
import Message from "../db/models/message.model.js"
import * as allergyService from "../services/allergy.services.js"

const env = process.env
const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

export const startChat = async (message, conversationId, currentUserId) => {
  try {
    const allergies = await allergyService.findAllByUserId(currentUserId);
    
    // Inclure un message de système avec le contexte désiré
    const allergyInstruction = ` N'incluez pas les produits suivants : ${allergies.join(", ")}, prenez en comptes ses restrictions`;
    const messages = [
      {
        role: "system",
        content:
          "Vous êtes un grand chef cuisinier. Vous avez une connaissance approfondie de toutes les cuisines du monde, vous ne traitez pas d'autres sujets autres que la cuisine" + allergyInstruction,
      },
      { role: "user", content: message },
    ]


    //On envoie la conversation à OpenAI
    const completion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
    })


    //On récupère le rôle et le contenu du message de l'assistant
    const role = completion.choices[0].message.role
    const content = completion.choices[0].message.content

     //
    const userMessageCreated = await Message.query().insert({
      role: "user",
      content: message,
      conversation_id: conversationId,
      created_at: new Date().toISOString(),
    })


    //
    const chatbotMessageCreated = await Message.query().insert({
      role,
      content,
      conversation_id: conversationId,
      created_at: new Date().toISOString(),
    })

    //On retourne le message de l'utilisateur et celui de l'assistant
    return { userMessageCreated, chatbotMessageCreated, conversation: messages }
  } catch (error) {
    throw error
  }
}


//On continue la conversation
export const continueChat = async (
  newMessage,
  conversationHistory = [],
  conversationId
) => {
  try {
    conversationHistory.push({ role: "user", content: newMessage })

    //On envoie la conversation à OpenAI
    const completion = await openai.chat.completions.create({
      messages: conversationHistory,
      model: "gpt-3.5-turbo",
    })


    //On récupère le message de l'assistant
    const response = completion.choices[0].message.content


    //On ajoute le message de l'assistant
    conversationHistory.push({ role: "assistant", content: response })


    //On ajoute le message de l'utilisateur
    const userMessageCreated = await Message.query().insert({
      role: "user",
      content: newMessage,
      conversation_id: conversationId,
      created_at: new Date().toISOString(),
    })

    //On ajoute le message de l'assistant
    const chatbotMessageCreated = await Message.query().insert({
      role: "assistant",
      content: response,
      conversation_id: conversationId,
      created_at: new Date().toISOString(),
    })

    return { response, conversationHistory, conversation: conversationHistory }
  } catch (error) {
    throw error
  }
}