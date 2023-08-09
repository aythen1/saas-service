import { Router } from 'express'
import { getEventByPk } from '../../controllers/event/get-id-event.js'
import { getAllEvents } from '../../controllers/event/get-all-event.js'
const outputEventRoutes = Router()

/**
 * @swagger
 * /api-v1/event:
 *   get:
 *     description: Returns events
 *     tags:
 *      - Events
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: events
 */
outputEventRoutes.get('/', getAllEvents)

/**
 * @swagger
 * /api-v1/event/{id}:
 *   get:
 *     description: Returns event by id
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Events
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: event
 */
outputEventRoutes.get('/:id', getEventByPk)

export default outputEventRoutes
