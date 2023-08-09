import { Router } from 'express'
import { getPaymentByPk } from '../../controllers/payment/get-id-payment.js'
import { getAllPayments } from '../../controllers/payment/get-all-payment.js'

const outputPaymentRoutes = Router()

/**
 * @swagger
 * /api-v1/payment:
 *   get:
 *     description: Returns payments
 *     tags:
 *      - Payments
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: payments
 */
outputPaymentRoutes.get('', getAllPayments)

/**
 * @swagger
 * /api-v1/payment/{id}:
 *   get:
 *     description: Returns payment by id
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Payments
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: payment
 */
outputPaymentRoutes.get('/:id', getPaymentByPk)

export default outputPaymentRoutes
