import { Router } from 'express'
import { getAllNotes } from '../../controllers/note/get-all-note.js'
import { getNoteByPk } from '../../controllers/note/get-id-note.js'

const outputNoteRoutes = Router()

/**
 * @swagger
 * /api-v1/note:
 *   get:
 *     description: Returns notes
 *     tags:
 *      - Notes
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: notes
 */
outputNoteRoutes.get('', getAllNotes)

/**
 * @swagger
 * /api-v1/note/{id}:
 *   get:
 *     description: Returns note by id
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Notes
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: note
 */
outputNoteRoutes.get('/:id', getNoteByPk)

export default outputNoteRoutes
