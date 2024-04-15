import * as conversationService from "../services/conversation.service.js"
import * as chatbotService from "../services/chatbot.service.js"


export const conversation = async (req, res, next) => {
  try {
    const {
      body: { description: message },
      session: {
        user: { id: currentUserId },
      },
    } = req

    // 1. Récupération de l'utilisateur connecté


    // 2. Récupération de la conversation en cours / création d'une nouvelle conversation
    let userConversation = await conversationService.findAllByUserId(
      currentUserId
    )
    // console.log("currentUserId", currentUserId)

    // console.log("conversations", conversations)
    if(userConversation === undefined){
       await conversationService.create({
          user_id: currentUserId,
          created_at: new Date().toISOString(),
        })

      userConversation = await conversationService.findAllByUserId(currentUserId)
    }


    // get conversation messages
    const messages = await conversationService.getMessages(userConversation.id)
    userConversation.messages = messages

    // 3. Appel du service pour démarrer la conversation
    // check if conversation has started or not (messages exist or not)
    if (userConversation.messages.length === 0) {
      console.log("message start", message)
      const response = await chatbotService.startChat(message, userConversation.id, currentUserId)
      return res.status(200).json(response) 
    }
  

    // filter fiels from conversation object
    const conversationHistory = userConversation.messages.map((message) => {
        //console.log("message", message)
        return {
          role: message.role,
          content: message.content,
        }
    })

    // 4. Appel du service pour continuer la conversation
    const response = await chatbotService.continueChat(
      message,
      conversationHistory,
      userConversation.id
    )

    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}


export const getConversation = async (req, res, next) => {
  try {
    const {
      session: {
        user: { id: currentUserId },
      },
    } = req

    // 1. Récupération de l'utilisateur connecté
    // 2. Récupération de la conversation en cours / création d'une nouvelle conversation
    const conversations = await conversationService.findAllByUserId(
      currentUserId
    )

    const conversation = conversations[0]
      ? conversations[0]
      : await conversationService.create({
          user_id: currentUserId,
          created_at: new Date().toISOString(),
        })

    // get conversation messages
    const messages = await conversationService.getMessages(conversation.id)
    conversation.messages = messages

    res.status(200).json(conversation)
  } catch (error) {
    next(error)
  }
}



export const deleteConversation = async (req, res, next) => {


  //je veux supprimer la conversation
  //je veux supprimer les messages de la conversation

  try {
    const {
      session: {
        user: { id: currentUserId },
      },
    } = req

    // 1. Récupération de l'utilisateur connecté
    // 2. Récupération de la conversation en cours / création d'une nouvelle conversation
    const conversations = await conversationService.findAllByUserId(
      currentUserId
    )

    const conversation = conversations[0]
      ? conversations[0]
      : await conversationService.create({
          user_id: currentUserId,
          created_at: new Date().toISOString(),
        })

    // get conversation messages
    const messages = await conversationService.getMessages(conversation.id)
    conversation.messages = messages

    // 3. Appel du service pour supprimer la conversation
    const response = await conversationService.deleteConversation(conversation.id)

    res.status(200).json(response)
  } catch (error) {
    next(error)
  }



} 