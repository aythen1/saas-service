import { Router } from 'express'
import { addMiscellaneous } from '../../controllers/miscellaneous/add-miscellaneous'
import { deleteMiscellaneous } from '../../controllers/miscellaneous/delete-miscellaneous'

const inputMiscellaneousRoutes = Router()

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
