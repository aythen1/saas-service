import { Withdrawals } from '../../database/connection/connectionDB.js'

export const addWithdrawals = async (req, res, next) => {
  const { amount, licenseNumber } = req.body

  try {
    if (!amount && !licenseNumber) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newWithdrawals = await Withdrawals.create(req.body)
      return res
        .status(201)
        .json({ message: 'withdrawals creado correctamente ', newWithdrawals })
    }
  } catch (error) {
    return next(error)
  }
}
