import { Router } from 'express'
import register from '../../controllers/auth/auth-register.js'

const registerRouter = Router()

/**
 * @swagger
 * /api-v1/register:
 *   post:
 *     description: Create User Account
 *     tags:
 *      - Auth
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            email:
 *              type: string
 *              description: Direccion de correo
 *              example: usuario@example.com
 *              required: true
 *            password:
 *              type: string
 *              description: Contraseña alfanumerica
 *              example: abc123456
 *              required: true
 *            name:
 *              type: string
 *              description: Nombre y apellido
 *              example: jose perez
 *          required:
 *            - email
 *            - password
 *     responses:
 *       201:
 *         description: user
 */
registerRouter.post('/register', register)

export default registerRouter
