import { Router } from 'express'
import { createCall } from '../../controllers/call/add-call.js'
import { deleteCall } from '../../controllers/call/delete-call.js'
import { updateCall } from '../../controllers/call/update-call.js'

const inputCallRoutes = Router()

inputCallRoutes.post('/create', createCall)
inputCallRoutes.put('/:id', updateCall)
inputCallRoutes.put('/delete/:id', deleteCall)

export default inputCallRoutes
