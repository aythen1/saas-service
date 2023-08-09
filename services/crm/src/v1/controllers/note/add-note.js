import { Note } from '../../database/connection/connectionDB.js'

export const createNote = async (req, res) => {
  const { name, text } = req.body
  if (!name || !text) {
    return res.status(404).send('Name or text are missing')
  }
  try {
    const newNote = await Note.create({ name, text })
    res.status(201).json(newNote)
  } catch (error) {
    res.status(404).send(error.message)
  }
}
