import { Attribute } from '../../database/connection/connectionDB.js'

export const addAttribute = async (req, res, next) => {
  const { name, image, quote } = req.body

  try {
    if (!name && !image && !quote) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newAttribute = await Attribute.create(req.body)
      return res
        .status(201)
        .json({ message: 'attribute creado correctamente ', newAttribute })
    }
  } catch (error) {
    return next(error)
  }
}
