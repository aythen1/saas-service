import { Router } from 'express'
import { getAllWithdrawals } from '../../controllers/Withdrawals/get-all-Withdrawals.js'
import { getWithdrawalsById } from '../../controllers/Withdrawals/get-id-Withdrawals.js'

const outPutWithdrawalsRouter = Router()

outPutWithdrawalsRouter.get('/all', getAllWithdrawals)
outPutWithdrawalsRouter.get('/:id', getWithdrawalsById)

export default outPutWithdrawalsRouter
