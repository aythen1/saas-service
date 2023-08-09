import { Router } from 'express'
import { getAllCalls } from '../../controllers/call/get-all-call.js'
import { getCallByPk } from '../../controllers/call/get-id-call.js'

const outputCallRoutes = Router()

/**
 * @swagger
 * /api-v1/call:
 *   get:
 *     description: Returns calls
 *     tags:
 *      - Calls
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: calls
 */
outputCallRoutes.get('', getAllCalls)

/**
 * @swagger
 * /api-v1/call/{id}:
 *   get:
 *     description: Returns call by id
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Calls
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: call
 */
outputCallRoutes.get('/:id', getCallByPk)

export default outputCallRoutes
