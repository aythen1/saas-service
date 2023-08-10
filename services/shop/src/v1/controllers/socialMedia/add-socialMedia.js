import { SocialMedia } from '../../database/connection/connectionDB.js'

export const addSocialMedia = async (req, res, next) => {
  const { name, profileUrl } = req.body

  try {
    if (!name && !profileUrl) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newSocialMedia = await SocialMedia.create(req.body)
      return res
        .status(201)
        .json({ message: 'SocialMedia creado correctamente ', newSocialMedia })
    }
  } catch (error) {
    return next(error)
  }
}
