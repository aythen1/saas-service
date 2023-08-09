import { Router } from 'express'
import { getAllTaxes } from '../../controllers/Taxes/get-all-Taxes.js'
import { getTaxesById } from '../../controllers/Taxes/get-id-Taxes.js'

const outPutTaxesRouter = Router()

outPutTaxesRouter.get('/all', getAllTaxes)
outPutTaxesRouter.get('/:id', getTaxesById)

export default outPutTaxesRouter
