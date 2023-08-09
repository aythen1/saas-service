import { Router } from 'express'
import { createEvent } from '../../controllers/event/add-event.js'
import { updateEvent } from '../../controllers/event/update-event.js'
import { deleteEvent } from '../../controllers/event/delete-event.js'
const inputEventRoutes = Router()

inputEventRoutes.post('/create', createEvent)
inputEventRoutes.put('/:id', updateEvent)
inputEventRoutes.put('/delete/:id', deleteEvent)
export default inputEventRoutes
