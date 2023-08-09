import { Router } from 'express'
import { addWithdrawals } from '../../controllers/Withdrawals/add-Withdrawals.js'
import { deleteWithdrawals } from '../../controllers/Withdrawals/delete-Withdrawals.js'

const inputWithdrawalsRoute = Router()

inputWithdrawalsRoute.post('/create', addWithdrawals)
inputWithdrawalsRoute.put('/:id', deleteWithdrawals)

export default inputWithdrawalsRoute
