import { Router } from 'express'
import { addSell } from '../../controllers/Sell/add-Sell.js'
import { deleteSell } from '../../controllers/Sell/delete-Sell.js'

const inputSellRoute = Router()

inputSellRoute.post('/create', addSell)
inputSellRoute.put('/:id', deleteSell)

export default inputSellRoute
