import { Router } from 'express'
import { getAllGroups } from '../../controllers/group/get-all-group.js'
import { getGroupByPk } from '../../controllers/group/get-id-group.js'

const outPutGroupRouter = Router()

outPutGroupRouter.get('/all', getAllGroups)
outPutGroupRouter.get('/:id', getGroupByPk)

export default outPutGroupRouter
