import { Router } from 'express'
import { createUser } from '../../controllers/user/add-user.js'
import { updateUser } from '../../controllers/user/update-user.js'
import { deleteUser } from '../../controllers/user/delete-user.js'
const inputUserRoute = Router()
/**
 * @swagger
 * /api-v1/user:
 *   post:
 *     description: Create user
 *     tags:
 *      - Users
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
 *            password:
 *              type: string
 *              required: true
 *            name:
 *              type: string
 *          required:
 *            - email
 *     responses:
 *       201:
 *         description: user
 */
inputUserRoute.post('/create', createUser)
inputUserRoute.put('/:id', updateUser)

/**
 * @swagger
 * /api-v1/user/delete/{id}:
 *   put:
 *     description: Delete user
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: user
 */
inputUserRoute.put('/delete/:id', deleteUser)
export default inputUserRoute
