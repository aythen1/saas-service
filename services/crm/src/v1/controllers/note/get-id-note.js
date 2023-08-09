import { Note } from '../../database/connection/connectionDB.js'

export const getNoteByPk = async (req, res, next) => {
  const { id } = req.params
  try {
    const note = await Note.findByPk(id)
    if (!note) {
      return res.status(404).send(`The noteID: ${id} doesn't exist`)
    }
    return res.status(200).json(note)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
