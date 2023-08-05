import { Router } from 'express'
import { getSecurityByPk } from '../../controllers/security/get-id-security.js'

const outputSecurityRoutes = Router()

/**
 * @swagger
 * /api-v1/security/{id}:
 *   get:
 *     description: Returns security by id
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Security
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: security
 */
outputSecurityRoutes.get('/', getSecurityByPk)

export default outputSecurityRoutes
