import { Router } from 'express'
import { addTag } from '../../controllers/Tag/add-Tag.js'
import { deleteTag } from '../../controllers/Tag/delete-Tag.js'

const inputTagRoute = Router()

inputTagRoute.post('/create', addTag)
inputTagRoute.put('/:id', deleteTag)

export default inputTagRoute
