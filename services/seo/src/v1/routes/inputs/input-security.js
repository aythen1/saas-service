import { Router } from 'express'
import { addSecurity } from '../../controllers/security/add-security.js'
import { deleteSecurity } from '../../controllers/security/delete-security.js'

const inputSecurityRoutes = Router()

inputSecurityRoutes.post('/', addSecurity)

/**
 * @swagger
 * /api-v1/security/delete/{id}:
 *   put:
 *     description: Delete security
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
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
