import { Note } from '../../database/connection/connectionDB.js'

export const getAllNotes = async (req, res, next) => {
  try {
    const allNotes = await Note.findAll()
    if (!allNotes.length) {
      return res
        .status(404)
        .json({ message: 'There are not Notes in database' })
    }
    return res.status(200).json(allNotes)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
