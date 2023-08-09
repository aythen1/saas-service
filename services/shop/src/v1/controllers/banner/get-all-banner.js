import { Banner } from '../../database/connection/connectionDB.js'

export const getAllBanner = async (req, res, next) => {
  try {
    const banner = await Banner.findAll()
    if (!banner) {
      return res.status(404).send("doesn't exists")
    }
    return res.status(200).json({ message: 'banner found', banner })
  } catch (error) {
    return next(error)
  }
}
