import { Router } from 'express'
import { addGroup } from '../../controllers/group/add-group.js'
import { deleteGroup } from '../../controllers/group/delete-group.js'

const inputGroupRouter = Router()

inputGroupRouter.post('/create', addGroup)
inputGroupRouter.put('/delete/:id', deleteGroup)

export default inputGroupRouter
