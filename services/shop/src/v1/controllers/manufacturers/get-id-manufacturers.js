import { Manufacturers } from '../../database/connection/connectionDB.js'

export const getManufacturersById = async (req, res, next) => {
  const { id } = req.params
  try {
    const manufacturers = await Manufacturers.findByPk(id)
    if (!manufacturers) {
      return res.status(404).send(`The manufacturersId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'manufacturers found', manufacturers })
  } catch (error) {
    return next(error)
  }
}
