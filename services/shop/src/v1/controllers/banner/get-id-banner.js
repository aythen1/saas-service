import { Banner } from '../../database/connection/connectionDB.js'

export const getBannerById = async (req, res, next) => {
  const { id } = req.params
  try {
    const banner = await Banner.findByPk(id)
    if (!banner) {
      return res.status(404).send(`The bannerId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'banner found', banner })
  } catch (error) {
    return next(error)
  }
}
