import { SocialMedia } from '../../database/connection/connectionDB.js'

export const getSocialMediaById = async (req, res, next) => {
  const { id } = req.params
  try {
    const social = await SocialMedia.findByPk(id)
    if (!social) {
      return res.status(404).send(`The socialID: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'social media found', social })
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
