import { Sell } from '../../database/connection/connectionDB.js'

export const getSellById = async (req, res, next) => {
  const { id } = req.params
  try {
    const sell = await Sell.findByPk(id)
    if (!sell) {
      return res.status(404).send(`The sellId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'sell found', sell })
  } catch (error) {
    return next(error)
  }
}
