import { Router } from 'express'
import { getEventByPk } from '../../controllers/event/get-id-event.js'
import { getAllEvents } from '../../controllers/event/get-all-event.js'
const outputEventRoutes = Router()

outputEventRoutes.get('/', getAllEvents)
outputEventRoutes.get('/:id', getEventByPk)

export default outputEventRoutes
