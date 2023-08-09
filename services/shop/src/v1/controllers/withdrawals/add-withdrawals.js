import { Withdrawals } from '../../database/connection/connectionDB.js'

export const addWithdrawals = async (req, res, next) => {
  const { name, image, quote } = req.body

  try {
    if (!name && !image && !quote) {
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
