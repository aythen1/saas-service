import { Router } from 'express'
import { addSecurity } from '../../controllers/security/add-security'
import { deleteSecurity } from '../../controllers/security/delete-security'

const inputSecurityRoutes = Router()

inputSecurityRoutes.post('/', addSecurity)

/**
 * @swagger
 * /api-v1/input/security/delete/:id:
 *   put:
 *     description: Delete security
 *     tags:
 *      - Security
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: security
 */
inputSecurityRoutes.put('/delete/:id', deleteSecurity)

export default inputSecurityRoutes
