import { Router } from 'express'
import { addUser } from '../../controllers/user/add-user.js'
import { updateUser } from '../../controllers/user/update-user.js'
import { deleteUser } from '../../controllers/user/delete-user.js'

const userInputRoutes = Router()

// /**
//  * @swagger
//  * definitions:
//  *  Users:
//  *    type: object
//  *    properties:
//  *       email:
//  *         type: string
//  *         required: true
//  *       password:
//  *         type: string
//  *         required: true
//  *       name:
//  *         type: string
//  *       timezone:
//  *         type: string
//  *       avatar:
//  *         type: string
//  *       url:
//  *         type: string
//  *       phone:
//  *         type: string
//  *       apiKey:
//  *         type: string
//  *       isDisable:
//  *         type: boolean
//  *         default: false
//  */

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
 *              description: Contraseña alfanumerica
 *              example: abc123456
 *              required: true
 *            name:
 *              type: string
 *              description: Nombre y apellido
 *              example: jose perez
 *          required:
 *            - email
 *     responses:
 *       201:
 *         description: user
 */
userInputRoutes.post('/', addUser)

/**
 * @swagger
 * /api-v1/user/{id}:
 *   put:
 *     description: Update user
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *      - in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *            name:
 *              type: string
 *            timezone:
 *              type: string
 *            avatar:
 *              type: string
 *            url:
 *              type: string
 *            phone:
 *              type: string
 *            apiKey:
 *              type: string
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: user
 */
userInputRoutes.put('/:id', updateUser)

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
userInputRoutes.put('/delete/:id', deleteUser)

export default userInputRoutes
