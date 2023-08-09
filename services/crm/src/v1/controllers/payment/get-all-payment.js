import { Payment } from '../../database/connection/connectionDB.js'

export const getAllPayments = async (req, res, next) => {
  try {
    const allPayments = await Payment.findAll()
    if (!allPayments.length) {
      return res
        .status(404)
        .json({ message: 'There are not payment in database' })
    }
    return res.status(200).json(allPayments)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
