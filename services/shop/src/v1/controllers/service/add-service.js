import { Service } from '../../database/connection/connectionDB.js'

export const createService = async (req, res, next) => {
  const { name, licenseNumber, phone, image, gallery } = req.body
  const { UserId } = req.params

  if (!name && !licenseNumber && !phone && !image && !gallery && !UserId) return res.status(404).json({ message: 'Debe ingresar todos los campos requeridos' })

  try {
    const data = { ...req.body, UserId }
    const carga = await Service.create(data)
    res.json({ message: 'result', carga })
  } catch (error) {
    return next(error)
  }
}
