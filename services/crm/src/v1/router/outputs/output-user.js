import { Router } from 'express'
import { getAllUsers } from '../../controllers/user/get-all-user.js'
import { getUserByPk } from '../../controllers/user/get-id-user.js'
const outputUserRoutes = Router()

outputUserRoutes.get('/', getAllUsers)
outputUserRoutes.get('/:id', getUserByPk)

export default outputUserRoutes
