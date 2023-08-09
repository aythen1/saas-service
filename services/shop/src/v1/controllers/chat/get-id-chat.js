import { Chat } from '../../database/connection/connectionDB.js'

export const getChatById = async (req, res, next) => {
  const { id } = req.params
  try {
    const chat = await Chat.findByPk(id)
    if (!chat) {
      return res.status(404).send(`The chatId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'chat found', chat })
  } catch (error) {
    return next(error)
  }
}
