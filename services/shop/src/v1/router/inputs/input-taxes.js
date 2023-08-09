import { Router } from 'express'
import { addTaxes } from '../../controllers/Taxes/add-Taxes.js'
import { deleteTaxes } from '../../controllers/Taxes/delete-Taxes.js'

const inputTaxesRoute = Router()

inputTaxesRoute.post('/create', addTaxes)
inputTaxesRoute.put('/:id', deleteTaxes)

export default inputTaxesRoute
