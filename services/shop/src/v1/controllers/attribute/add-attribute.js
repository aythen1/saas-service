import { Attribute } from '../../database/connection/connectionDB.js'

export const addAttribute = async (req, res, next) => {
  const { name, value } = req.body

  try {
    if (!name && !value) {
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
