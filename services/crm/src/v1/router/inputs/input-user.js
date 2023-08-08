import { Router } from 'express'
import { createUser } from '../../controllers/user/add-user.js'
import { updateUser } from '../../controllers/user/update-user.js'
import { deleteUser } from '../../controllers/user/delete-user.js'
const inputUserRoute = Router()

inputUserRoute.post('/create', createUser)
inputUserRoute.put('/:id', updateUser)
inputUserRoute.put('/delete/:id', deleteUser)
export default inputUserRoute
