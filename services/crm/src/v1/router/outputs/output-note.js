import { Router } from 'express'
import { getAllNotes } from '../../controllers/note/get-all-note.js'
import { getNoteByPk } from '../../controllers/note/get-id-note.js'

const outputNoteRoutes = Router()

outputNoteRoutes.get('', getAllNotes)
outputNoteRoutes.get('/:id', getNoteByPk)

export default outputNoteRoutes
