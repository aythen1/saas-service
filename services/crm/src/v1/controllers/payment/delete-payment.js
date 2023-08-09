import { Payment } from '../../database/connection/connectionDB.js'

export const deletePayment = async (req, res, next) => {
  const { id } = req.params
  const payment = await Payment.findByPk(id)

  if (!payment) {
    return res.status(404).send(`The PaymentId: ${id} doesn't exist`)
  }

  try {
    await Payment.update({ isDisable: true }, { where: { id } })
    return res.send(`The PaymentId: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
