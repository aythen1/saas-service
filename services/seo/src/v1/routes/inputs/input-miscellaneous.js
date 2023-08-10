import { Router } from 'express'
import { addMiscellaneous } from '../../controllers/miscellaneous/add-miscellaneous.js'
import { deleteMiscellaneous } from '../../controllers/miscellaneous/delete-miscellaneous.js'

const inputMiscellaneousRoutes = Router()

/**
 * @swagger
 * /api-v1/miscellaneous:
 *   post:
 *     description: Create miscellaneous
 *     tags:
 *      - Miscellaneous
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            url:
 *              type: string
 *              description: url to analize
 *              example: https:google.com
 *          required:
 *            - url
 *     responses:
 *       201:
 *         description: miscellaneous
 */
inputMiscellaneousRoutes.post('/', addMiscellaneous)

/**
 * @swagger
 * /api-v1/miscellaneous/delete/{id}:
 *   put:
 *     description: Delete miscellaneous
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Miscellaneous
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: miscellaneous
 */
inputMiscellaneousRoutes.put('/delete/:id', deleteMiscellaneous)

export default inputMiscellaneousRoutes
