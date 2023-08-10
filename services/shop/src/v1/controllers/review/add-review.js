import { Review } from '../../database/connection/connectionDB.js'

export const createReview = async (req, res, next) => {
  const { message, rating, date } = req.body

  if (!message && !rating && !date) return res.status(404).json({ message: 'Debe ingresar todos los campos requeridos' })

  try {
    const carga = await Review.create(req.body)
    res.json({ message: 'result', carga })
  } catch (error) {
    return next(error)
  }
}
