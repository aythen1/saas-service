import { Chat } from '../../database/connection/connectionDB.js'

export const getAllChat = async (req, res, next) => {
  try {
    const chat = await Chat.findAll()
    if (!chat) {
      return res.status(404).send("doesn't exists")
    }
    return res.status(200).json({ message: 'chat found', Chat })
  } catch (error) {
    return next(error)
  }
}
