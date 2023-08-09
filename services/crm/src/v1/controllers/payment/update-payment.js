import { Payment } from '../../database/connection/connectionDB.js'

export const updatePayment = async (req, res, next) => {
  const { id } = req.params
  const { name, status, total } = req.body
  try {
    const payment = await Payment.findByPk(id)
    if (!payment) return res.status(404).send(`The userId: ${id} doesn't exist`)

    const paymentUpdate = await payment.update(
      { name, status, total },
      { where: { id } }
    )
    return res
      .status(200)
      .json({ message: 'Payment update', payment: paymentUpdate })
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
