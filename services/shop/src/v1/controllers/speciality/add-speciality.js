import { Speciality } from '../../database/connection/connectionDB.js'

export const createSpeciality = async (req, res, next) => {
  const { name, serviceId } = req.body

  if (!name && !serviceId) return res.status(404).json({ message: 'Debe ingresar todos los campos requeridos' })

  try {
    const carga = await Speciality.create(req.body)
    res.json({ message: 'result', carga })
  } catch (error) {
    return next(error)
  }
}
