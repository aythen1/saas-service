import { Router } from 'express'
import { getAllUsers } from '../../controllers/user/get-all-user.js'
import { getUserByPk } from '../../controllers/user/get-id-user.js'

const outputUserRoutes = Router()

/**
 * @swagger
 * /api-v1/output/user:
 *   get:
 *     description: Returns users
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 */
outputUserRoutes.get('/', getAllUsers)

/**
 * @swagger
 * /api-v1/output/user/{id}:
 *   get:
 *     description: Returns user by id
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: user
 */
outputUserRoutes.get('/:id', getUserByPk)

export default outputUserRoutes
