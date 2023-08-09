import { Withdrawals } from '../../database/connection/connectionDB.js'

export const getAllWithdrawals = async (req, res, next) => {
  try {
    const withdrawals = await Withdrawals.findAll()
    if (!withdrawals) {
      return res.status(404).send("doesn't exists")
    }
    return res.status(200).json({ message: 'withdrawals found', withdrawals })
  } catch (error) {
    return next(error)
  }
}
