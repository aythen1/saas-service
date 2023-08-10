import { Chat } from '../../database/connection/connectionDB.js'

export const addChat = async (req, res, next) => {
  const { message } = req.body

  try {
    if (!message) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newChat = await Chat.create(req.body)
      return res
        .status(201)
        .json({ message: 'chat creado correctamente ', newChat })
    }
  } catch (error) {
    return next(error)
  }
}
