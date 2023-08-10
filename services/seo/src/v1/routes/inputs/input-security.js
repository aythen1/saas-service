import { Router } from 'express'
import { addSecurity } from '../../controllers/security/add-security.js'
import { deleteSecurity } from '../../controllers/security/delete-security.js'

const inputSecurityRoutes = Router()

/**
 * @swagger
 * /api-v1/security:
 *   post:
 *     description: Create security
 *     tags:
 *      - Security
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
 *         description: security
 */
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
