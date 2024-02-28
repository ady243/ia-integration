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

    
    if (typeof message !== 'string' || message.trim() === '') {
      console.log('Invalid user input:', message);
      return res.status(400).json({ error: 'Invalid user input: ' + message });
  }

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

    // 3. Appel du service pour démarrer la conversation
    // check if conversation has started or not (messages exist or not)
    if (conversation.messages.length === 0) {
      const response = await chatbotService.startChat(message, conversation.id)
      res.status(200).json(response)
    }

  

    // filter fiels from conversation object
    const conversationHistory = conversation.messages.map((message) => {
      return {
        role: message.role,
        content: message.content,
      }
    })

    // 4. Appel du service pour continuer la conversation
    const response = await chatbotService.continueChat(
      message,
      conversationHistory,
      conversation.id
    )

    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}
