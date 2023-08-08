import { Router } from 'express'
import { addMiscellaneous } from '../../controllers/miscellaneous/add-miscellaneous'
import { deleteMiscellaneous } from '../../controllers/miscellaneous/delete-miscellaneous'

const inputMiscellaneousRoutes = Router()

inputMiscellaneousRoutes.post('/', addMiscellaneous)

/**
 * @swagger
 * /api-v1/input/miscellanous/delete/:id:
 *   put:
 *     description: Delete miscellanous
 *     tags:
 *      - Miscellanous
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: miscellanous
 */
inputMiscellaneousRoutes.put('/delete/:id', deleteMiscellaneous)

export default inputMiscellaneousRoutes
