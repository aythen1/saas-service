import { Router } from 'express'
import { getAllCalls } from '../../controllers/call/get-all-call.js'
import { getCallByPk } from '../../controllers/call/get-id-call.js'

const outputCallRoutes = Router()

outputCallRoutes.get('', getAllCalls)
outputCallRoutes.get('/:id', getCallByPk)

export default outputCallRoutes
