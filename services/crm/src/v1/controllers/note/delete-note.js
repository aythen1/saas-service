import { Note } from '../../database/connection/connectionDB.js'

export const deleteNote = async (req, res, next) => {
  const { id } = req.params
  const note = await Note.findByPk(id)

  if (!note) {
    return res.status(404).send(`The noteId: ${id} doesn't exist`)
  }

  try {
    await Note.update({ isDisable: true }, { where: { id } })
    return res.send(`The noteId: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
