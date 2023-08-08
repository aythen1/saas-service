import { SocialMedia } from '../../database/connection/connectionDB.js'

export const addSocialMedia = async (req, res, next) => {
  const { name } = req.body

  try {
    if (!name) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newSocialMedia = await SocialMedia.create(req.body)
      return res
        .status(201)
        .json({ message: 'SocialMedia creado correctamente ', newSocialMedia })
    }
  } catch (error) {
    return res.status(404).json({ mesagge: error.message })
  }
}
