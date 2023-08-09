import { Router } from 'express'
import { createNote } from '../../controllers/note/add-note.js'
import { updateNote } from '../../controllers/note/update-note.js'
import { deleteNote } from '../../controllers/note/delete-note.js'

const inputNoteRoutes = Router()

inputNoteRoutes.post('/create', createNote)
inputNoteRoutes.put('/:id', updateNote)
inputNoteRoutes.put('/delete/:id', deleteNote)

export default inputNoteRoutes
