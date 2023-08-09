import { Note } from '../../database/connection/connectionDB.js'

export const updateNote = async (req, res, next) => {
  const { id } = req.params
  const { name, text } = req.body
  try {
    const note = await Note.findByPk(id)
    if (!note) return res.status(404).send(`The NoteId: ${id} doesn't exist`)

    const noteUpdate = await note.update({ name, text }, { where: { id } })
    return res.status(200).json({ message: 'Note update', note: noteUpdate })
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
