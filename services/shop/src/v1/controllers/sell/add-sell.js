import { Sell } from '../../database/connection/connectionDB.js'

export const addSell = async (req, res, next) => {
  const { dateTransaction, status } = req.body

  try {
    if (!dateTransaction && !status) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newSell = await Sell.create(req.body)
      return res
        .status(201)
        .json({ message: 'sell creado correctamente ', newSell })
    }
  } catch (error) {
    return next(error)
  }
}
