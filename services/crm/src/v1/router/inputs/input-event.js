import { Router } from 'express'
import { createEvent } from '../../controllers/event/add-event.js'
import { updateEvent } from '../../controllers/event/update-event.js'
import { deleteEvent } from '../../controllers/event/delete-event.js'
const inputEventRoutes = Router()

/**
 * @swagger
 * /api-v1/event:
 *   post:
 *     description: Create Event
 *     tags:
 *      - Events
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              description: Nombre del evento
 *              example: Reunion de presentacion
 *            date:
 *              type: string
 *              example: 2023-08-09
 *     responses:
 *       201:
 *         description: user
 */
inputEventRoutes.post('/create', createEvent)
inputEventRoutes.put('/:id', updateEvent)

/**
 * @swagger
 * /api-v1/event/delete/{id}:
 *   put:
 *     description: Delete event
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Events
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: event
 */
inputEventRoutes.put('/delete/:id', deleteEvent)
export default inputEventRoutes
