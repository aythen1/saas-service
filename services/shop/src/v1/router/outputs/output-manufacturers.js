import { Router } from 'express'
import { getAllManufacturers } from '../../controllers/manufacturers/get-all-manufacturers.js'
import { getManufacturersById } from '../../controllers/manufacturers/get-id-manufacturers.js'

const outPutManufacturersRouter = Router()

outPutManufacturersRouter.get('/all', getAllManufacturers)
outPutManufacturersRouter.get('/:id', getManufacturersById)

export default outPutManufacturersRouter
