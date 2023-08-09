import { Sell } from '../../database/connection/connectionDB.js'

export const getAllSell = async (req, res, next) => {
  try {
    const sell = await Sell.findAll()
    if (!sell) {
      return res.status(404).send("doesn't exists")
    }
    return res.status(200).json({ message: 'sell found', sell })
  } catch (error) {
    return next(error)
  }
}
