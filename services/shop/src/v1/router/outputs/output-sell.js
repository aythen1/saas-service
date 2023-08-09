import { Router } from 'express'
import { getAllSell } from '../../controllers/Sell/get-all-Sell.js'
import { getSellById } from '../../controllers/Sell/get-id-Sell.js'

const outPutSellRouter = Router()

outPutSellRouter.get('/all', getAllSell)
outPutSellRouter.get('/:id', getSellById)

export default outPutSellRouter
