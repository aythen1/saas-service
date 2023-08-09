import { Router } from 'express'
import { createPayment } from '../../controllers/payment/add-payment.js'
import { updatePayment } from '../../controllers/payment/update-payment.js'
import { deletePayment } from '../../controllers/payment/delete-payment.js'

const inputPaymentRoutes = Router()

/**
 * @swagger
 * /api-v1/payment:
 *   post:
 *     description: Create Payment
 *     tags:
 *      - Payments
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              description: Nombre del pago o factura
 *              example: Factura por servicio crm
 *            total:
 *              type: integer
 *              example: 500USD
 *     responses:
 *       201:
 *         description: payment
 */
inputPaymentRoutes.post('/create', createPayment)
inputPaymentRoutes.put('/:id', updatePayment)

/**
 * @swagger
 * /api-v1/payment/delete/{id}:
 *   put:
 *     description: Delete payment
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Payments
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: payment
 */
inputPaymentRoutes.put('/delete/:id', deletePayment)
export default inputPaymentRoutes
