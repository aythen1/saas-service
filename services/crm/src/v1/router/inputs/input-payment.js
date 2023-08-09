import { Router } from 'express'
import { createPayment } from '../../controllers/payment/add-payment.js'
import { updatePayment } from '../../controllers/payment/update-payment.js'
import { deletePayment } from '../../controllers/payment/delete-payment.js'

const inputPaymentRoutes = Router()

inputPaymentRoutes.post('/create', createPayment)
inputPaymentRoutes.put('/:id', updatePayment)
inputPaymentRoutes.put('/delete/:id', deletePayment)
export default inputPaymentRoutes
