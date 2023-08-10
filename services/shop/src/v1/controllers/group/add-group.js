import { Group } from '../../database/connection/connectionDB.js'

export const addGroup = async (req, res, next) => {
  const { name, icon, layout, productCard, promotionalSlide } = req.body

  if (!name && !icon && !layout && !productCard && !promotionalSlide) {
    res.status(404).json({ message: 'Debe ingresar todos los campos requeridos' })
  } else {
    try {
      const newGroup = await Group.create(req.body)
      return newGroup
        ? res.status(200).json({ message: 'grupo creado exitosaente', newGroup })
        : res.status(404).json({ mesage: 'ha ocurrido un problema' })
    } catch (error) {
      return next(error)
    }
  }
}
