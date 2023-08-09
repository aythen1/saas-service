import { Payment } from '../../database/connection/connectionDB.js'

export const getPaymentByPk = async (req, res, next) => {
  const { id } = req.params
  try {
    const payment = await Payment.findByPk(id)
    if (!payment) {
      return res.status(404).send(`The PaymentId: ${id} doesn't exist`)
    }
    return res.status(200).json(payment)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
