import { Router } from 'express'
import { getPaymentByPk } from '../../controllers/payment/get-id-payment.js'
import { getAllPayments } from '../../controllers/payment/get-all-payment.js'

const outputPaymentRoutes = Router()

outputPaymentRoutes.get('', getAllPayments)
outputPaymentRoutes.get('/:id', getPaymentByPk)

export default outputPaymentRoutes
