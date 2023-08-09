import { Manufacturers } from '../../database/connection/connectionDB.js'

export const getAllManufacturers = async (req, res, next) => {
  try {
    const manufacturers = await Manufacturers.findAll()
    if (!manufacturers) {
      return res.status(404).send("doesn't exists")
    }
    return res.status(200).json({ message: 'manufacturers found', manufacturers })
  } catch (error) {
    return next(error)
  }
}
