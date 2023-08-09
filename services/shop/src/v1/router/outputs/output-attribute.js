import { Router } from 'express'
import { getAllAttribute } from '../../controllers/attribute/get-all-attribute.js'
import { getAttributeById } from '../../controllers/attribute/get-id-attribute.js'

const outPutAttributeRouter = Router()

outPutAttributeRouter.get('/all', getAllAttribute)
outPutAttributeRouter.get('/:id', getAttributeById)

export default outPutAttributeRouter
