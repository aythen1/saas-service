import { Router } from 'express'
import { getMiscellaneousByPk } from '../../controllers/miscellaneous/get-id-miscellaneous.js'

const outputMiscellaneousRoutes = Router()

/**
 * @swagger
 * /api-v1/miscellaneous/{id}:
 *   get:
 *     description: Returns miscellaneous by id
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Miscellaneous
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: miscellaneous
 */
outputMiscellaneousRoutes.get('/:id', getMiscellaneousByPk)

export default outputMiscellaneousRoutes
