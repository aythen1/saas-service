import { Chat } from '../../database/connection/connectionDB.js'

export const deleteChat = async (req, res, next) => {
  const { id } = req.params
  const chat = await Chat.findByPk(id)

  if (!chat) {
    return res.status(404).send(`The chatID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await Chat.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The chatID: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
