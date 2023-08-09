import { Withdrawals } from '../../database/connection/connectionDB.js'

export const getWithdrawalsById = async (req, res, next) => {
  const { id } = req.params
  try {
    const withdrawals = await Withdrawals.findByPk(id)
    if (!withdrawals) {
      return res.status(404).send(`The WithdrawalsId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'withdrawals found', withdrawals })
  } catch (error) {
    return next(error)
  }
}
