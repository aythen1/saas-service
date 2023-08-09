import { Router } from 'express'
import { createCall } from '../../controllers/call/add-call.js'
import { deleteCall } from '../../controllers/call/delete-call.js'
import { updateCall } from '../../controllers/call/update-call.js'

const inputCallRoutes = Router()

/**
 * @swagger
 * /api-v1/call:
 *   post:
 *     description: Create Call
 *     tags:
 *      - Calls
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            nameTransmitter:
 *              type: string
 *              description: Nombre del emisor
 *              example: Juan Carlos
 *            nameReceiver:
 *              type: string
 *              description: Nombre del emisor
 *              example: Juan Carlos
 *            duration:
 *              type: number
 *            date:
 *              type: string
 *              example: 2023-08-09
 *            stars:
 *              type: string

 *     responses:
 *       201:
 *         description: user
 */

inputCallRoutes.post('/create', createCall)
inputCallRoutes.put('/:id', updateCall)

/**
 * @swagger
 * /api-v1/call/delete/{id}:
 *   put:
 *     description: Delete call
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Calls
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: event
 */
inputCallRoutes.put('/delete/:id', deleteCall)

export default inputCallRoutes
