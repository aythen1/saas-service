import { Router } from 'express'
import { addManufacturers } from '../../controllers/Manufacturers/add-Manufacturers.js'
import { deleteManufacturers } from '../../controllers/Manufacturers/delete-Manufacturers.js'

const inputManufacturersRoute = Router()

inputManufacturersRoute.post('/create', addManufacturers)
inputManufacturersRoute.put('/:id', deleteManufacturers)

export default inputManufacturersRoute
