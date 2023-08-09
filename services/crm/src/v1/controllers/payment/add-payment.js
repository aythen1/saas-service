import { Payment } from '../../database/connection/connectionDB.js'

export const createPayment = async (req, res) => {
  const { name, status, total } = req.body
  if (!name || !status || !total) {
    return res.status(404).send('Name or status are missing')
  }

  try {
    const newPayment = await Payment.create({ name, status, total })
    return res.status(201).json(newPayment)
  } catch (error) {
    res.status(404).send(error.message)
  }
}
