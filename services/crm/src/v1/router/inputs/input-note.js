import { Router } from 'express'
import { createNote } from '../../controllers/note/add-note.js'
import { updateNote } from '../../controllers/note/update-note.js'
import { deleteNote } from '../../controllers/note/delete-note.js'

const inputNoteRoutes = Router()

/**
 * @swagger
 * /api-v1/note:
 *   post:
 *     description: Create Note
 *     tags:
 *      - Notes
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              description: Nombre de nota
 *              example: Nota de ejemplo
 *            text:
 *              type: string
 *              example: Texto de ejemplo
 *     responses:
 *       201:
 *         description: note
 */
inputNoteRoutes.post('/create', createNote)
inputNoteRoutes.put('/:id', updateNote)

/**
 * @swagger
 * /api-v1/note/delete/{id}:
 *   put:
 *     description: Delete note
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Notes
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: note
 */
inputNoteRoutes.put('/delete/:id', deleteNote)

export default inputNoteRoutes
